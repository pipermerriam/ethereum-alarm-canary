(function() {
  Explorer.contracts = Explorer.contracts || {};

  var FutureBlockCall = Explorer.web3.eth.contract([
    {
        "constant": true,
        "inputs": [],
        "name": "wasSuccessful",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "targetBlock",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "firstClaimBlock",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getExtraGas",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "n",
                "type": "uint256"
            }
        ],
        "name": "__dig",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "executor",
                "type": "address"
            },
            {
                "name": "block_number",
                "type": "uint256"
            }
        ],
        "name": "checkExecutionAuthorization",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "requiredStackDepth",
        "outputs": [
            {
                "name": "",
                "type": "uint16"
            }
        ],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "callAPIVersion",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "claimerDeposit",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "anchorGasPrice",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "isCancellable",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "callData",
        "outputs": [
            {
                "name": "",
                "type": "bytes"
            }
        ],
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "claim",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getClaimAmountForBlock",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "execute",
        "outputs": [],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "baseDonation",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getOverhead",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "executor",
                "type": "address"
            },
            {
                "name": "startGas",
                "type": "uint256"
            }
        ],
        "name": "beforeExecute",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "claimAmount",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "origin",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "isCancelled",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "requiredGas",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "gracePeriod",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "lastClaimBlock",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "schedulerAddress",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "registerData",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "state",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "basePayment",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "wasCalled",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "abiSignature",
        "outputs": [
            {
                "name": "",
                "type": "bytes4"
            }
        ],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "maxClaimBlock",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "claimer",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "callValue",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "cancel",
        "outputs": [],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "block_number",
                "type": "uint256"
            }
        ],
        "name": "getClaimAmountForBlock",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "contractAddress",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_schedulerAddress",
                "type": "address"
            },
            {
                "name": "_targetBlock",
                "type": "uint256"
            },
            {
                "name": "_gracePeriod",
                "type": "uint8"
            },
            {
                "name": "_contractAddress",
                "type": "address"
            },
            {
                "name": "_abiSignature",
                "type": "bytes4"
            },
            {
                "name": "_callData",
                "type": "bytes"
            },
            {
                "name": "_callValue",
                "type": "uint256"
            },
            {
                "name": "_requiredGas",
                "type": "uint256"
            },
            {
                "name": "_requiredStackDepth",
                "type": "uint16"
            },
            {
                "name": "_basePayment",
                "type": "uint256"
            },
            {
                "name": "_baseDonation",
                "type": "uint256"
            }
        ],
        "type": "constructor"
    }
  ]);

  Explorer.contracts.FutureBlockCall = FutureBlockCall;
})();
