Canary.CanaryCard = React.createClass({
  mixins: [FluxMixin, Fluxxor.StoreWatchMixin("canaryStore")],

  getStateFromFlux() {
    return Canary.flux.store("canaryStore").getCanary(this.props.address);
  },

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

  getAliveSinceDisplay() {
    var aliveSince = new Date(this.state.alive_since * 1000);
    return aliveSince.toLocaleString();
  },

  render() {
    if (_.isNull(this.state)) {
      return (
        <div className="card card-block">
          <h4 className="card-title">Loading {this.props.address}</h4>
        </div>
      );
    } else {
      return (
        <div className="card">
          <div className="card-header">
            <span className={"label label-" + this.getLabelClass()}>{this.getLabelText()}</span>
          </div>
          <div className="card-block">
            <h4 className="card-title">Canary</h4>
            <p className="card-text">Canary at <code>{this.props.address}</code></p>
            <p className="card-text">{this.state.heartbeat_count} Heartbeats</p>
            <p className="card-text">Alive Since {this.getAliveSinceDisplay()}</p>
          </div>
        </div>
      );
    }
  }
});

