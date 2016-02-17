Canary.actions = {
  fetchCanaryAddresses: function() {
    console.log("Fetching canary list");
    $.ajax({
      url: "api/canaries/"
    }).then(function(data) {
      Canary.dispatcher.dispatch({
        actionType: "SET_CANARY_ADDRESSES",
        data: {addresses: data.results}
      });
    })
  },
  fetchCanary: function(address) {
    console.log("Fetching: " + address);
    $.ajax({
      url: "api/canaries/" + address + "/",
      error: function(jqXHR, textStatus, errorThrown) {
        Canary.dispatcher.dispatch({
          actionType: "SET_CANARY",
          data: {
            is_error: true,
            error: jqXHR.responseJSON || jqXHR.responseText || textStatus,
          }
        });
      },
      success: function(data) {
        Canary.dispatcher.dispatch({
          actionType: "SET_CANARY",
          data: {address: address, data: data}
        });
      }
    })
  }
};
