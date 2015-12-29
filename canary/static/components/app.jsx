Canary.App = React.createClass({
  render() {
    return (
      <div>
        <h1>Reliability Canary</h1>
        <Canary.CanaryList flux={this.props.flux} />
      </div>
    );
  }
});
