Canary.CanaryCard = React.createClass({
  getInitialState() {
    console.log("initializing card: " + this.props.address);
    return Canary.stores.CanaryStore.getCanary(this.props.address);
  },

  _onChange: function() {
    console.log("updating card: " + this.props.address);
    this.setState(Canary.stores.CanaryStore.getCanary(this.props.address));
  },


  componentWillMount: function() {
    if (_.isNull(this.state)) {
      Canary.actions.fetchCanary(this.props.address);
    }
  },

  componentDidMount: function() {
    Canary.stores.CanaryStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    Canary.stores.CanaryStore.removeChangeListener(this._onChange);
  },

  /*
   *  Display helpers
   */
  getLabelClass() {
    if (this.state.is_alive) {
      return "success";
    } else {
      return "danger";
    }
  },

  getLabelText() {
    if (this.state.is_alive) {
      return "Alive";
    } else {
      return "Dead";
    }
  },
  getDateDisplay(when) {
    return when.toLocaleString();
  },

  getAliveSinceDisplay() {
    var aliveSince = new Date(this.state.alive_since * 1000);
    return this.getDateDisplay(aliveSince);
  },

  getLastHeartbeatDisplay() {
    var lastHeartbeat = new Date(this.state.last_heartbeat * 1000);
    return this.getDateDisplay(lastHeartbeat);
  },

  render() {
    if (_.isNull(this.state)) {
      return (
        <Canary.LoadingCanary address={this.props.address} />
      );
    } else if (this.state.is_error) {
      return (
        <Canary.ErrorCanary address={this.props.address} />
      );
    } else if (this.state.is_alive) {
      return (
        <Canary.LivingCanary address={this.props.address} aliveSinceDisplay={this.getAliveSinceDisplay()} heartbeatCount={this.state.heartbeat_count} />
      );
    } else {
      return (
        <Canary.DeadCanary address={this.props.address} aliveSinceDisplay={this.getAliveSinceDisplay()} heartbeatCount={this.state.heartbeat_count} lastHeartbeat={this.state.last_heartbeat} lastHeartbeatDisplay={this.getLastHeartbeatDisplay()} />
      );
    }
  }
});


Canary.LoadingCanary = React.createClass({
  render() {
    return (
      <div className="card card-block">
        <h4 className="card-title">Loading Canary @ {this.props.address}</h4>
      </div>
    );
  }
})


Canary.ErrorCanary = React.createClass({
  render() {
    return (
      <div className="card card-block">
        <h4 className="card-title">Error Loading Canary @ {this.props.address}</h4>
        <p className="card-text">Something went wrong while trying to load the canary contract @ <code>{this.props.address}</code></p>
      </div>
    );
  }
})


Canary.LivingCanary = React.createClass({
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">
            Canary <span className="label label-success">Alive</span>
          </h4>
          <h4 className="card-title">
            <code>{this.props.address}</code>
          </h4>
        </div>
        <div className="card-block">
          <p className="card-text">This canary contract has been alive since {this.props.aliveSinceDisplay}.  There have been {this.props.heartbeatCount} heartbeats.</p>
        </div>
      </div>
    );
  }
})


Canary.DeadCanary = React.createClass({
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">
            Canary <span className="label label-danger">Dead</span>
          </h4>
          <h4 className="card-title">
            <code>{this.props.address}</code>
          </h4>
        </div>
        <div className="card-block">
          <p className="card-text">This canary contract was born on {this.props.aliveSinceDisplay}.  There were {this.props.heartbeatCount} heartbeats before it died at {this.props.lastHeartbeatDisplay}</p>
        </div>
      </div>
    );
  }
})
