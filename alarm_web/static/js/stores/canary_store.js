(function() {
  var canaryAddresses = new Immutable.List();
  var canaries = new Immutable.OrderedMap();

  Canary.CanaryStore = Fluxxor.createStore({
    actions: {
      "SET_CANARY_ADDRESSES": "setCanaryAddresses",
      "SET_CANARY": "setCanary",
    },
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

    /*
     *  Action Handlers
     */
    setCanaryAddresses: function(payload, type) {
      canaryAddresses = new Immutable.List(payload.addresses);
      this.emit("change");
    },

    setCanary: function(payload, type) {
      console.log("loaded address: " + payload.address);
      canaries = canaries.set(payload.address, payload.data);
      this.emit("change");
    }
  });
})();
