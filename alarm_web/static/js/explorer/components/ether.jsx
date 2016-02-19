Explorer.Ether = React.createClass({
  denoms: [
    "tether",
    "gether",
    "mether",
    "kether",
    "ether",
    "finney",
    "szabo",
    "shannon",
    "ada",
    "wei"
  ],
  getDenomination(value) {
    if (!_.isUndefined(this.props.denomination) ) {
      return this.props.denomination;
    }

    denom = _.find(this.denoms, function(denom) {
      var denomValue = new BigNumber(Explorer.web3.toWei(1, denom)).toNumber();
      return (value >= denomValue);
    })

    if (_.isUndefined(denom)) {
      return "wei";
    }

    return denom;
  },
  render() {
    var denom = this.getDenomination(this.props.value);
    var value = Explorer.web3.fromWei(this.props.value, denom);
    return (
      <span>{_.trunc(value, {length: 6, omission: ''})} {denom}</span>
    );
  }
});
