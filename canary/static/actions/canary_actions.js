Canary.actions = {
  fetchCanaryAddresses: function() {
    $.ajax({
      url: "/api/canaries/"
    }).then($.proxy(function(data) {
      this.dispatch("SET_CANARY_ADDRESSES", {addresses: data.results});
    }, this))
  },
  fetchCanary: function(address) {
    $.ajax({
      url: "/api/canaries/" + address + "/"
    }).then($.proxy(function(data) {
      this.dispatch("SET_CANARY", {address: address, data: data});
    }, this))
  }
};
