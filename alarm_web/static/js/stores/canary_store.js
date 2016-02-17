(function() {
  Canary.stores = Canary.stores || {};

  var canaries = new Immutable.OrderedMap();

  var CHANGE_EVENT = "change";

  var CanaryStore = _.assign({}, EventEmitter2.prototype, {
    /*
     *  Getters
     */
    getCanaryAddresses: function() {
      return new Immutable.List(canaries.keys());
    },

    getCanary: function(address) {
      return canaries.get(address, null);
    },

    isCanaryLoaded: function(address) {
      return 
    },

    addChangeListener: function(callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange: function() {
      console.log("Canary Store changed");
      this.emit(CHANGE_EVENT);
    },

    dispatcherIndex: Canary.dispatcher.register(function(payload) {
      console.log("Handling action: " + payload.actionType);

      switch (payload.actionType) {
        case "SET_CANARY_ADDRESSES":
          _.forEach(payload.data.addresses, function(address) {
            canaries = canaries.set(address, null);
          });
          CanaryStore.emitChange();
          break;
        case "SET_CANARY":
          canaries = canaries.set(payload.data.address, payload.data.data);
          CanaryStore.emitChange();
          break;
      }

      return true;
    })

  });

  Canary.stores.CanaryStore = CanaryStore;
})();
