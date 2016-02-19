(function() {
  var scheduler = Explorer.contracts.Scheduler.at("0x6c8f2a135f6ed072de4503bd7c4999a1a17f824b");

  var EMPTY_ADDRESS = "0x0000000000000000000000000000000000000000";

  SchedulerActions = {
    fetchNextScheduledCall: function(blockNumber) {
      console.log("Fetching next scheduled call ");

      if (_.isUndefined(blockNumber)) {
        blockNumber = Explorer.stores.ChainStore.getBlockNumber();
      }

      if (_.isNull(blockNumber)) {
        // Try again in 2 seconds
        setTimeout(SchedulerActions.fetchNextScheduledCall, 2000);
        return
      }

      scheduler.getNextCall(blockNumber, function(error, result) {
        if (!error) {
          Explorer.dispatcher.dispatch({
            actionType: "SET_NEXT_CALL",
            data: result,
          });
          SchedulerActions.enumerateUpcomingCalls(result, 10);
          SchedulerActions.enumeratePastCalls(result, 10);
        } else {
          console.error(error);
        }
      });
    },

    pushAddressesToStore: function(addresses) {
      SchedulerActions.getBlockNumbers(addresses).then(function(blockNumbers) {
        Explorer.dispatcher.dispatch({
          actionType: "SET_ENUMERATED_CALLS",
          data: {
            addresses: addresses,
            blockNumbers: blockNumbers,
          }
        });
      })
    },

    getNextCall: function(address) {
      var promise = new Promise(function(resolve, reject) {
        scheduler.getNextCallSibling(address, function(error, result) {
          if (!error) {
            resolve(result);
          } else {
            console.error(error);
          }
        })
      });
      return promise;
    },

    getAllCalls: function(leftAddress, rightAddress) {
      /*
       *  Get all calls between the 
       */
      var calls = new Immutable.List([leftAddress]);

      var cb = function(address) {
        /*
         *  Recursively get the next call
         */
        if (address === EMPTY_ADDRESS) {
          return calls;
        }

        calls = calls.push(address);

        if (address === rightAddress) {
          return calls;
        }

        return SchedulerActions.getNextCall(address).then(cb);
      };

      var promise = SchedulerActions.getNextCall(leftAddress).then(cb);
      return promise;
    },

    getBlockNumbers: function(addresses) {
      /*
       *  Returns a promise which resolves to the block numbers associated with
       *  the provided addresses.
       */
      var promises = addresses.map(function(address) {
        fbc = Explorer.contracts.FutureBlockCall.at(address);
        return Explorer.CallActions.promisify(fbc.targetBlock);
      });
      return Promise.all(promises);
    },

    enumerateUpcomingCalls: function(anchor, numCalls) {

      var promise = new Promise(function(resolve, reject) {
        var calls = new Immutable.List([anchor]);

        var cb = function(value) {
          if (value === EMPTY_ADDRESS) {
            return calls;
          } else {
            calls = calls.push(value);

            if (calls.size > numCalls) {
              return calls;
            } else {
              return SchedulerActions.getNextCall(value).then(cb);
            }
          }
        };

        var inner = SchedulerActions.getNextCall(anchor).then(cb);
        resolve(inner);
      });

      promise.then(SchedulerActions.pushAddressesToStore);
    },

    enumeratePastCalls: function(anchor, numCalls) {
      var calls = new Immutable.List([anchor]);
      var rightAnchor = anchor;
      var anchorBlock;
      var stepValue = 480;

      var cb = function() {
        if (calls.size > numCalls) {
          return Promise.resolve(calls);
        }

        var leftBound = Math.max(anchorBlock - stepValue, 0);
        console.log("looking for calls starting at block: " + leftBound);

        var promise = new Promise(function(resolve, reject) {
          scheduler.getNextCall(leftBound, function(error, result) {
            if (!error) {
              if (calls.has(result)) {
                if (leftBound === 0) {
                  // We've looked all the way to the first block.
                  resolve(calls);
                } else {
                  // Look further back in time.
                  stepValue *= 2;
                  resolve(cb());
                }
              } else {
                SchedulerActions.getAllCalls(result, rightAnchor).then(function(addresses) {
                  // new right anchor is the previous left bound.
                  rightAnchor = result;
                  // add all the new calls onto the 
                  addresses.map(function(address) {
                    if (!calls.includes(address)) {
                      calls = calls.push(address);
                    }
                  });
                  stepValue *= 2;
                  resolve(cb());
                });
              }
            } else {
              console.error(error);
              reject(error);
            }
          });
        });
        return promise;
      }

      fbc = Explorer.contracts.FutureBlockCall.at(anchor);

      // Find the anchor block and then start looking backwards for calls.
      var promise = new Promise(function(resolve, reject) {
        fbc.targetBlock(function(error, result) {
          if (!error) {
            anchorBlock = result;
            resolve(cb());
          } else {
            console.error(error);
            reject(error);
          }
        });
      })

      promise.then(SchedulerActions.pushAddressesToStore);
    }
  };

  Explorer.SchedulerActions = SchedulerActions;
})();
