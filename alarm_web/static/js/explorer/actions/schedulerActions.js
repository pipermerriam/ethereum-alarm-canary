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
        } else {
          console.error(error);
        }
      });
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
    getBlockNumbers: function(addresses) {
      var promises = addresses.map(function(address) {
        fbc = Explorer.contracts.FutureBlockCall.at(address);
        return Explorer.CallActions.promisify(fbc.targetBlock);
      });
      return Promise.all(promises);
    }

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

      promise.then(function(addresses) {
        SchedulerActions.getBlockNumbers(addresses).then(function(blockNumbers) {
          Explorer.dispatcher.dispatch({
            actionType: "SET_ENUMERATED_CALLS",
            data: {
              addresses: addresses,
              blockNumbers: blockNumbers,
            }
          });
        })
      });
    }
  };

  Explorer.SchedulerActions = SchedulerActions;
})();
