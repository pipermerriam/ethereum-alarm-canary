var flux;
(function() {
  Canary.stores = {
    canaryStore: new Canary.CanaryStore()
  };

  Canary.flux = new Fluxxor.Flux(Canary.stores, Canary.actions)
  flux = Canary.flux;

  flux.actions.fetchCanaryAddresses();
})();
