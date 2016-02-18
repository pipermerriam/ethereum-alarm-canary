(function() {
  Explorer.contracts = Explorer.contracts || {};

  var SchedulerLib = Explorer.web3.eth.contract([
    {
        "constant": true,
        "inputs": [],
        "name": "getMaximumCallGas",
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
                "name": "callIndex",
                "type": "GroveLib.Index storage"
            },
            {
                "name": "schedulerAddress",
                "type": "address"
            },
            {
                "name": "contractAddress",
                "type": "address"
            },
            {
                "name": "abiSignature",
                "type": "bytes4"
            },
            {
                "name": "callData",
                "type": "bytes"
            },
            {
                "name": "gracePeriod",
                "type": "uint8"
            },
            {
                "name": "requiredStackDepth",
                "type": "uint16"
            },
            {
                "name": "callValue",
                "type": "uint256"
            },
            {
                "name": "targetBlock",
                "type": "uint256"
            },
            {
                "name": "requiredGas",
                "type": "uint256"
            },
            {
                "name": "basePayment",
                "type": "uint256"
            },
            {
                "name": "baseDonation",
                "type": "uint256"
            },
            {
                "name": "endowment",
                "type": "uint256"
            }
        ],
        "name": "scheduleCall",
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
        "name": "version",
        "outputs": [
            {
                "name": "",
                "type": "uint16"
            },
            {
                "name": "",
                "type": "uint16"
            },
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
        "name": "getMaximumStackCheck",
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
        "name": "getDefaultGracePeriod",
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
        "inputs": [
            {
                "name": "basePayment",
                "type": "uint256"
            },
            {
                "name": "baseDonation",
                "type": "uint256"
            }
        ],
        "name": "getMinimumCallCost",
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
        "name": "getMinimumStackCheck",
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
        "name": "getMinimumCallGas",
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
        "name": "getCallWindowSize",
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
        "name": "getFirstSchedulableBlock",
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
        "name": "getMinimumGracePeriod",
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
                "name": "callIndex",
                "type": "GroveLib.Index storage"
            },
            {
                "name": "addresses",
                "type": "address[2]"
            },
            {
                "name": "abiSignature",
                "type": "bytes4"
            },
            {
                "name": "callData",
                "type": "bytes"
            },
            {
                "name": "gracePeriod",
                "type": "uint8"
            },
            {
                "name": "requiredStackDepth",
                "type": "uint16"
            },
            {
                "name": "uints",
                "type": "uint256[6]"
            }
        ],
        "name": "scheduleCall",
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
        "inputs": [
            {
                "name": "basePayment",
                "type": "uint256"
            },
            {
                "name": "baseDonation",
                "type": "uint256"
            },
            {
                "name": "callValue",
                "type": "uint256"
            },
            {
                "name": "requiredGas",
                "type": "uint256"
            }
        ],
        "name": "getMinimumEndowment",
        "outputs": [
            {
                "name": "endowment",
                "type": "uint256"
            }
        ],
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "call_address",
                "type": "address"
            }
        ],
        "name": "CallScheduled",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "schedulerAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "reason",
                "type": "bytes32"
            }
        ],
        "name": "CallRejected",
        "type": "event"
    }
  ]);

  Explorer.contracts.SchedulerLib = SchedulerLib;
})();
