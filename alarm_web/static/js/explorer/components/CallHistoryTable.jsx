Explorer.CallHistoryTable = React.createClass({
  getDefaultProps: function() {
    return {
      beforeRows: 5,
      afterRows: 5,
    };
  },
  getInitialState: function() {
    return {
      anchor: null,
      addresses: []
    };
  },

  onChange: function() {
    var nextState = {}
    if (!_.isString(this.state.anchor)) {
      nextState.anchor = Explorer.stores.SchedulerStore.getNextCall();
      Explorer.SchedulerActions.enumerateUpcomingCalls(nextState.anchor, this.props.afterRows);
    } else {
      nextState.anchor = this.state.anchor;
    }

    nextState.addresses = Explorer.stores.SchedulerStore.getUpcomingCalls(nextState.anchor, this.props.afterRows);
    this.setState(nextState);
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
    var tableRows = this.state.addresses.map(function(address) {
      return (
          <Explorer.CallHistoryTableRow address={address} key={address}/>
      );
    });
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
            {tableRows}
          </tbody>
        </table>
      </div>
    );
  }
});


Explorer.CallHistoryTableRow = React.createClass({
  onChange: function() {
    this.setState(Explorer.stores.CallStore.getCallData(this.props.address));
  },

  componentWillMount: function() {
    Explorer.CallActions.fetchCall(this.props.address);
  },

  componentDidMount: function() {
    Explorer.stores.CallStore.addChangeListener(this.props.address, this.onChange);
  },

  componentWillUnmount: function() {
    Explorer.stores.CallStore.removeChangeListener(this.props.address, this.onChange);
  },

  render() {
    if (_.isNull(this.state)) {
      return (
        <tr>
          <th scope="row">1</th>
          <td><Explorer.EthereumAddressIcon address={this.props.address} size="small" /> <code>{this.props.address}</code></td>
          <td colSpan="6">Loading...</td>
        </tr>
      );
    }
    return (
      <tr>
        <th scope="row">1</th>
        <td><Explorer.EthereumAddressIcon address={this.props.address} size="small" /> <Explorer.EthereumAddress address={this.props.address} maxChars={10} /></td>
        <td>{this.state.targetBlock.toNumber()}</td>
        <td><Explorer.EthereumAddressIcon address={this.state.schedulerAddress} size="small" /> <Explorer.EthereumAddress address={this.state.schedulerAddress} maxChars={10} /></td>
        <td><Explorer.YesNo value={this.state.wasCalled} /></td>
        <td><Explorer.YesNo value={this.state.wasSuccessful} /></td>
        <td><Explorer.Ether value={this.state.basePayment.toNumber()} /></td>
        <td><Explorer.Ether value={this.state.baseDonation.toNumber()} /></td>
      </tr>
    );
  }
});
