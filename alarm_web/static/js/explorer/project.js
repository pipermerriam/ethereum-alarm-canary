(function() {
  // Setup web3 provider
  var provider = new Web3.providers.HttpProvider('http://localhost:8545');
  Explorer.web3.setProvider(provider);

  // Setup recurring call to chain provider to stay up-to-date
  Explorer.ChainActions.fetchBlockNumber();
  Explorer.ChainActions.startPolling();
})();
