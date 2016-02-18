Explorer.EthereumAddressIcon = React.createClass({
  getDefaultProps() {
    return {
      size: "large",
      extraClasses: []
    }
  },

  render() {
    var dataURL = blockies.create({
      seed: this.props.address,
      size: 8,
      scale: 16
    }).toDataURL();

    classes = "icon-eth-address icon-eth-address-" + this.props.size;
    extraClasses = _.reduce(this.props.extraClasses, function(cls) {
      return classes + " " + cls;
    });

    return (
      <img className={classes} src={dataURL}></img>
    );
  }
});
