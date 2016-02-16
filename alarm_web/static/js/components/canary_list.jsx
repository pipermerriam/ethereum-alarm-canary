Canary.CanaryList = React.createClass({
  mixins: [FluxMixin, Fluxxor.StoreWatchMixin("canaryStore")],

  getStateFromFlux() {
    console.log("Addresses updated");
    return {
      addresses: Canary.flux.store("canaryStore").getCanaryAddresses()
    }
  },

  render() {
    var canaryCards = this.state.addresses.map(function(canaryAddress) {
      if (!Canary.flux.store("canaryStore").isCanaryLoaded(canaryAddress)) {
        console.log("loading canary: " + canaryAddress);
        Canary.flux.actions.fetchCanary(canaryAddress);
      }
      return (
          <Canary.CanaryCard address={canaryAddress} key={canaryAddress}/>
      );
    });
    return (
      <div className="canary-cards">
        {canaryCards}
      </div>
    );
  }
});
