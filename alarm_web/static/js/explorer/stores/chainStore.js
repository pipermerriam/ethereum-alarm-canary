(function() {
  Explorer.stores = Explorer.stores || {};

  var blockNumber = null;
  var CHANGE_EVENT = "change";

  var ChainStore = _.assign({}, EventEmitter2.prototype, {
    /*
     *  Getters
     */
    getBlockNumber: function() {
      return blockNumber;
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
        case "SET_BLOCK_NUMBER":
          blockNumber = payload.data;
          ChainStore.emitChange();
          break;
      }

      return true;
    })

  });

  Explorer.stores.ChainStore = ChainStore;
})();
