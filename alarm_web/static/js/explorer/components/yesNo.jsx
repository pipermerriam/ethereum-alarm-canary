Explorer.YesNo = React.createClass({
  getDefaultProps() {
    return {
      yes: "Yes",
      no: "No",
      unknown: "Unknown"
    }
  },
  render() {
    var txt;
    if (this.props.value === true) {
      txt = this.props.yes;
    } else if (this.props.value === false) {
      txt = this.props.no;
    } else {
      txt = this.props.unknown;
    }
    return (
      <span>{txt}</span>
    );
  }
});
