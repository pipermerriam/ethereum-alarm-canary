Canary.App = React.createClass({
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <h1>Reliability Canary Info:</h1>
            <p>This page contains information about Canary contracts.  Each canary contract will continually reschedule function calls with the Alarm service.  If any of these calls ever fails to be executed the canary will die.</p>
            <Canary.CanaryList />
          </div>
        </div>
      </div>
    );
  }
});
