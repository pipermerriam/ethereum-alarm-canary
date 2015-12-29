(function() {
  var canaries = new Immutable.List([
    // v2 - deployed 2015-12-27
    '0x675e2c143295b8683b5aed421329c4df85f91b33'
  ]);

  Canary.CanaryStore = Fluxxor.createStore({
    getCanaries: function() {
      return canaries;
    }
  });
})();
