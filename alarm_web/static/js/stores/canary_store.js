(function() {
  Canary.stores = Canary.stores || {};

  var canaryAddresses = new Immutable.List();
  var canaries = new Immutable.OrderedMap();

  var CHANGE_EVENT = "change";

  var CanaryStore = _.assign({}, EventEmitter2.prototype, {
    /*
     *  Getters
     */
    getCanaryAddresses: function() {
      return canaryAddresses;
    },

    getCanary: function(address) {
      return canaries.get(address, null);
    },

    isCanaryLoaded: function(address) {
      return canaries.has(address);
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
          canaryAddresses = new Immutable.List(payload.data.addresses);
          CanaryStore.emitChange();
          break;
        case "SET_CANARY":
          debugger;
          canaries = canaries.set(payload.address, payload.data);
          CanaryStore.emitChange();
          break;
      }

      return true;
    })

  });

  Canary.stores.CanaryStore = CanaryStore;
})();
