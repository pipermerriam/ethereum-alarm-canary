Explorer.CallHistoryTable = React.createClass({
  getInitialState: function() {
    return {
      anchor: null
    };
  },

  onChange: function() {
    console.log("updating next call");
    this.setState({
      anchor: Explorer.stores.SchedulerStore.getNextCall()
    });
  },

  componentWillMount: function() {
    if (_.isNull(Explorer.stores.SchedulerStore.getNextCall())) {
      Explorer.SchedulerActions.fetchNextScheduledCall();
    }
  },

  componentDidMount: function() {
    Explorer.stores.SchedulerStore.addChangeListener(this.onChange);
  },

  componentWillUnmount: function() {
    Explorer.stores.SchedulerStore.removeChangeListener(this.onChange);
  },

  render() {
    console.log(this.state.anchor);
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Address</th>
              <th>Target Block</th>
              <th>Scheduled By</th>
              <th>Was Called</th>
              <th>Was Successful</th>
              <th>Payment</th>
              <th>Donation</th>
            </tr>
          </thead>
          <tbody>
            <Explorer.CallHistoryTableRow address={this.state.anchor} />
          </tbody>
        </table>
      </div>
    );
  }
});


Explorer.CallHistoryTableRow = React.createClass({
  render() {
    console.log("in table" + this.props);
    return (
      <tr>
        <th scope="row">1</th>
        <td><Explorer.EthereumAddressIcon address={this.props.address} size="small" /> <code>{this.props.address}</code></td>
        <td>1,000,000</td>
        <td><Explorer.EthereumAddressIcon address="0xabcd" size="small" /></td>
        <td>Yes</td>
        <td>Yes</td>
        <td>1 ether</td>
        <td>1 finney</td>
      </tr>
    );
  }
});
