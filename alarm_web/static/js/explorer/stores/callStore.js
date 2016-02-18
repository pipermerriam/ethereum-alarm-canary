(function() {
  Explorer.stores = Explorer.stores || {};

  var calls = new Immutable.Map();

  var CHANGE_PREFIX = "change-";

  var CallStore = _.assign({}, EventEmitter2.prototype, {
    /*
     *  Getters
     */
    getCallData: function(address) {
      return calls.get(address);
    },

    /*
     *  Event binding and emitting
     */
    addChangeListener: function(address, callback) {
      this.on(CHANGE_PREFIX + address, callback);
    },

    removeChangeListener: function(address, callback) {
      this.removeListener(CHANGE_PREFIX + address, callback);
    },

    emitChange: function(address) {
      this.emit(CHANGE_PREFIX + address);
    },

    dispatcherToken: Explorer.dispatcher.register(function(payload) {
      console.log("Handling action: " + payload.actionType);

      switch (payload.actionType) {
        case "SET_CALL_DATA":
          calls = calls.set(payload.address, payload.data);
          CallStore.emitChange(payload.address);
          break;
      }

      return true;
    })

  });

  Explorer.stores.CallStore = CallStore;
})();



