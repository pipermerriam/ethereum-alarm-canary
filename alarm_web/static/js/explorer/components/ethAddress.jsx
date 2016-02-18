Explorer.EthereumAddress = React.createClass({
  getDefaultProps() {
    return {
      maxChars: 42,
    }
  },
  render() {
    var txt = _.trunc(this.props.address, {
      length: this.props.maxChars
    });

    return (
      <code>{txt}</code>
    );
  }
});

