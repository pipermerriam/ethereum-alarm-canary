Explorer.EthereumAddressIcon = React.createClass({
  getDefaultProps() {
    return {
      size: 8,
      scale: 16,
      extraClasses: []
    }
  },

  render() {
    var dataURL = blockies.create({
      seed: this.props.address,
      size: this.props.size,
      scale: this.props.scale
    }).toDataURL();

    classes = "icon-eth-address";
    extraClasses = _.reduce(this.props.extraClasses, function(cls) {
      return classes + " " + cls;
    });

    return (
      <img className={classes} src={dataURL}></img>
    );
  }
});
