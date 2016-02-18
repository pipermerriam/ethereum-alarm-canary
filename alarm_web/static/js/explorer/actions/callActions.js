(function() {
  CallActions = {
    promisify: function(cb) {
      return new Promise(function(resolve, reject) {
        cb(function(error, result) {
          if (!error) {
            resolve(result);
          } else {
            console.error(error);
            reject(error);
          }
        })
      });
    },
    fetchCall: function(address) {
      console.log("Fetching scheduled call data");
      var fbc = Explorer.contracts.FutureBlockCall.at(address);

      var batch = Explorer.web3.createBatch();

      // TODO: promises
      var callData = {
        schedulerAddress: CallActions.promisify(fbc.schedulerAddress),
        contractAddress: CallActions.promisify(fbc.contractAddress),
        targetBlock: CallActions.promisify(fbc.targetBlock),
        wasCalled: CallActions.promisify(fbc.wasCalled),
        wasSuccessful: CallActions.promisify(fbc.wasSuccessful),
        basePayment: CallActions.promisify(fbc.basePayment),
        baseDonation: CallActions.promisify(fbc.baseDonation)
      };
      _(callData)
        .thru(_.pairs)
        .thru(function(value) { return _.zip.apply(this, value); })
        .tap(function(value) {
          var keys = value[0];
          var promises = value[1];
          Promise.all(promises).then(function(values) {
            data = _.zipObject(keys, values);
             Explorer.dispatcher.dispatch({
               actionType: "SET_CALL_DATA",
               data: data,
               address: address
             });
          })
        }).value();
    }

  };

  Explorer.CallActions = CallActions;
})();

