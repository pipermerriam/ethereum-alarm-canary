Canary.CanaryList = React.createClass({
  getInitialState() {
    console.log("Addresses initialized");
    return {
      addresses: Canary.stores.CanaryStore.getCanaryAddresses()
    }
  },

  _onChange: function() {
    console.log("Addresses updated");
    this.setState({
      addresses: Canary.stores.CanaryStore.getCanaryAddresses()
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
