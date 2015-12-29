Canary.CanaryCard = React.createClass({
  render() {
    return (
      <div className="card card-block">
        <h4 className="card-title">Canary</h4>
        <p className="card-text">Canary at <code>{this.props.address}</code></p>
        <a href="#" className="card-link">Card link</a>
        <a href="#" className="card-link">Another link</a>
      </div>
    );
  }
});

