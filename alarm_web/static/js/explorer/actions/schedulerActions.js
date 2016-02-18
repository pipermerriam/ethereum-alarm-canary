(function() {
  var scheduler = Explorer.contracts.Scheduler.at("0x6c8f2a135f6ed072de4503bd7c4999a1a17f824b");

  SchedulerActions = {
    fetchNextScheduledCall: function(blockNumber) {
      console.log("Fetching next scheduled call");

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
    }

  };

  Explorer.SchedulerActions = SchedulerActions;
})();
