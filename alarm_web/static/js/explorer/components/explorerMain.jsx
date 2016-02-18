Explorer.ExplorerMain = React.createClass({
  getInitialState: function() {
    return {};
  },

  onChange: function() {
    this.setState({
      blockNumber: Explorer.stores.ChainStore.getBlockNumber()
    });
  },

  componentDidMount: function() {
    Explorer.stores.ChainStore.addChangeListener(this.onChange);
  },

  componentWillUnmount: function() {
    Explorer.stores.ChainStore.removeChangeListener(this.onChange);
  },

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="address-header">
              <div className="pull-xs-left">
                <Explorer.EthereumAddressIcon address="0x6c8f2a135f6ed072de4503bd7c4999a1a17f824b"/> 
              </div>
              <div className="pull-xs-left">
                <h4 className="card-title">Scheduling Contract {this.state.blockNumber}</h4>
                <h6 className="card-subtitle text-muted"><code>0x6c8f2a135f6ed072de4503bd7c4999a1a17f824b</code></h6>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
          <div className="col-md-12">
            <Explorer.CallHistoryTable />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Explorer.SchedulerConstants />
          </div>
          <div className="col-md-8">
            <div className="card-deck-wrapper">
              <div className="card-deck">
                <div className="card">
                  <div className="card-block">
                    <div className="pull-xs-left">
                      <Explorer.EthereumAddressIcon address="0x6c8f2a135f6ed072de4503bd7c4999a1a17f824b"/> 
                    </div>
                    <div className="pull-xs-left">
                      <h4 className="card-title">Scheduled Call</h4>
                      <h6 className="card-subtitle text-muted"><code>0x6c8f2a135f6ed072de4503bd7c4999a1a17f824b</code></h6>
                    </div>
                  </div>
                  <div className="clearfix"></div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Status: Pending</li>
                    <li className="list-group-item">Scheduled By: <code>0x1234</code></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
