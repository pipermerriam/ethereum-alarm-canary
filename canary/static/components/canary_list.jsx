Canary.CanaryList = React.createClass({
  getInitialState() {
    //return Canary.CanaryStore.getCanaries();
    return new Immutable.List([
      '0x675e2c143295b8683b5aed421329c4df85f91b33'
    ]);
  },

  render() {
    var canaryCards = this.state.map(function(canaryAddress) {
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
