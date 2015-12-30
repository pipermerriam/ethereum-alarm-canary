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
            <h4 className="card-title">
              Canary <span className={"label label-" + this.getLabelClass()}>{this.getLabelText()}</span>
            </h4>
            <h4 className="card-title">
              <code>{this.props.address}</code>
            </h4>
          </div>
          <div className="card-block">
            <p className="card-text">This canary contract has been alive since {this.getAliveSinceDisplay()}.  There have been {this.state.heartbeat_count} heartbeats.</p>
          </div>
        </div>
      );
    }
  }
});
