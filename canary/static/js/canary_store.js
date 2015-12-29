(function() {
  var canaries = new Immutable.List([
    '0x675e2c143295b8683b5aed421329c4df85f91b33'
  ]);

  Canary.CanaryStore = Fluxxor.createStore({
    getCanaries: function() {
      return canaries;
    }
  });
})();
