(function() {
  Explorer.stores = Explorer.stores || {};

  /*
   *  Data storage
   */
  var nextCall = null;
  var callTargetBlocks = new Immutable.Map();
  var calls = new Immutable.List();

  var CHANGE_EVENT = "change";

  var SchedulerStore = _.assign({}, EventEmitter2.prototype, {
    /*
     *  Getters
     */
    getNextCall: function() {
      return nextCall;
    },

    getUpcomingCalls: function(anchor, beforeCount, afterCount) {
      var anchorIndex = calls.indexOf(anchor);

      if (anchorIndex === -1) {
        return [];
      } else {
        leftIndex = Math.max(anchorIndex - beforeCount, 0);
        rightIndex = anchorIndex + afterCount;
        return calls.slice(leftIndex, rightIndex);
      }
    },

    /*
     *  Event binding and emitting
     */
    addChangeListener: function(callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange: function() {
      this.emit(CHANGE_EVENT);
    },

    dispatcherToken: Explorer.dispatcher.register(function(payload) {
      console.log("Handling action: " + payload.actionType);

      switch (payload.actionType) {
        case "SET_NEXT_CALL":
          nextCall = payload.data;
          SchedulerStore.emitChange();
          break;
        case "SET_ENUMERATED_CALLS":
          callTargetBlocks = callTargetBlocks.merge(
            _.zipObject(payload.data.addresses.zip(payload.data.blockNumbers).toArray())
          );
          calls = callTargetBlocks.keySeq().sort(function(valueA, valueB) {
            var blockA = callTargetBlocks.get(valueA);
            var blockB = callTargetBlocks.get(valueB);
            if (blockA == blockB) {
              return 0;
            } else if (blockA < blockB) {
              return -1;
            } else {
              return 1;
            }
          }).toList();
          SchedulerStore.emitChange();
          break;
      }

      return true;
    })

  });

  Explorer.stores.SchedulerStore = SchedulerStore;
})();


