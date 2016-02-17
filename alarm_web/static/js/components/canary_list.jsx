Canary.CanaryList = React.createClass({
  getInitialState() {
    console.log("Addresses initialized");
    return {
      addresses: Canary.stores.CanaryStore.getCanaryAddresses()
    }
  },

  _onChange: function() {
    console.log("Addresses updated");
    var canaryAddresses = Canary.stores.CanaryStore.getCanaryAddresses();

    debugger;
    canaryAddresses.map(function(canaryAddress) {
      if (!Canary.stores.CanaryStore.isCanaryLoaded(canaryAddress)) {
        console.log("loading canary: " + canaryAddress);
        Canary.actions.fetchCanary(canaryAddress);
      }
    });

    this.setState({
      addresses: canaryAddresses
    });
  },

  componentDidMount: function() {
    Canary.stores.CanaryStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    Canary.stores.CanaryStore.removeChangeListener(this._onChange);
  },

  render() {
    var canaryCards = this.state.addresses.map(function(canaryAddress) {
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
