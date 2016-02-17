Canary.App = React.createClass({displayName: 'App',
  render() {
    return (
      React.createElement("div", {className: "container"}, 
        React.createElement("div", {className: "row"}, 
          React.createElement("div", {className: "col-md-8 col-md-offset-2"}, 
            React.createElement("h1", null, "Reliability Canary Info:"), 
            React.createElement("p", null, "This page contains information about Canary contracts.  Each canary contract will continually reschedule function calls with the Alarm service.  If any of these calls ever fails to be executed the canary will die."), 
            React.createElement(Canary.CanaryList, {flux: this.props.flux})
          )
        )
      )
    );
  }
});
