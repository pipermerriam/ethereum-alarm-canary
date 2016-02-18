(function() {
  Explorer.stores = Explorer.stores || {};

  var nextCall = null;

  var CHANGE_EVENT = "change";

  var SchedulerStore = _.assign({}, EventEmitter2.prototype, {
    /*
     *  Getters
     */
    getNextCall: function() {
      return nextCall;
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

    dispatcherIndex: Explorer.dispatcher.register(function(payload) {
      console.log("Handling action: " + payload.actionType);

      switch (payload.actionType) {
        case "SET_NEXT_CALL":
          nextCall = payload.data;
          SchedulerStore.emitChange();
          break;
      }

      return true;
    })

  });

  Explorer.stores.SchedulerStore = SchedulerStore;
})();


