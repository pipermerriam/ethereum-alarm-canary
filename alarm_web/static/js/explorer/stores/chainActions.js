(function() {
  var intervalId = null;

  ChainActions = {
    stopPolling: function() {
      if (!_.isNull(intervalId)) {
        clearInterval(intervalId)
      }
    },
    startPolling: function() {
      ChainActions.stopPolling();
      intervalId = setInterval(ChainActions.fetchBlockNumber, 17000);
    },
    fetchBlockNumber: function() {
      console.log("Fetching block number");
      Explorer.web3.eth.getBlockNumber(function(error, result) {
        if (!error) {
          Explorer.dispatcher.dispatch({
            actionType: "SET_BLOCK_NUMBER",
            data: result,
          });
        } else {
          console.error(error);
        }
      });
    }
  };

  Explorer.ChainActions = ChainActions;
})();
