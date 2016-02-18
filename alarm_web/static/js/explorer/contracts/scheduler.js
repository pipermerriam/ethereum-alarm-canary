(function() {
  Explorer.contracts = Explorer.contracts || {};

  var Scheduler = Explorer.web3.eth.contract([
    {
      "constant": false,
      "inputs": [
        {
          "name": "contractAddress",
          "type": "address"
        },
        {
          "name": "abiSignature",
          "type": "bytes4"
        },
        {
          "name": "targetBlock",
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
      "constant": false,
      "inputs": [
        {
          "name": "contractAddress",
          "type": "address"
        },
        {
          "name": "callValue",
          "type": "uint256"
        },
        {
          "name": "abiSignature",
          "type": "bytes4"
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
          "name": "gracePeriod",
          "type": "uint8"
        },
        {
          "name": "basePayment",
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
      "constant": false,
      "inputs": [
        {
          "name": "contractAddress",
          "type": "address"
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
      "constant": false,
      "inputs": [
        {
          "name": "contractAddress",
          "type": "address"
        },
        {
          "name": "abiSignature",
          "type": "bytes4"
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
          "name": "gracePeriod",
          "type": "uint8"
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
      "constant": false,
      "inputs": [
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
          "name": "requiredStackDepth",
          "type": "uint16"
        },
        {
          "name": "gracePeriod",
          "type": "uint8"
        },
        {
          "name": "args",
          "type": "uint256[5]"
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
      "constant": false,
      "inputs": [
        {
          "name": "abiSignature",
          "type": "bytes4"
        },
        {
          "name": "callData",
          "type": "bytes"
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
      "constant": false,
      "inputs": [
        {
          "name": "targetBlock",
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
      "name": "getDefaultStackCheck",
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
      "name": "getMinimumEndowment",
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
      "constant": false,
      "inputs": [
        {
          "name": "contractAddress",
          "type": "address"
        },
        {
          "name": "abiSignature",
          "type": "bytes4"
        },
        {
          "name": "callValue",
          "type": "uint256"
        },
        {
          "name": "callData",
          "type": "bytes"
        },
        {
          "name": "targetBlock",
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
      "constant": false,
      "inputs": [
        {
          "name": "contractAddress",
          "type": "address"
        },
        {
          "name": "abiSignature",
          "type": "bytes4"
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
      "constant": false,
      "inputs": [
        {
          "name": "abiSignature",
          "type": "bytes4"
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
          "name": "gracePeriod",
          "type": "uint8"
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
      "constant": false,
      "inputs": [
        {
          "name": "contractAddress",
          "type": "address"
        },
        {
          "name": "callValue",
          "type": "uint256"
        },
        {
          "name": "abiSignature",
          "type": "bytes4"
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
      "constant": false,
      "inputs": [
        {
          "name": "abiSignature",
          "type": "bytes4"
        },
        {
          "name": "callData",
          "type": "bytes"
        },
        {
          "name": "targetBlock",
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
      "constant": false,
      "inputs": [
        {
          "name": "contractAddress",
          "type": "address"
        },
        {
          "name": "abiSignature",
          "type": "bytes4"
        },
        {
          "name": "targetBlock",
          "type": "uint256"
        },
        {
          "name": "requiredGas",
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
      "inputs": [
        {
          "name": "callAddress",
          "type": "address"
        }
      ],
      "name": "getNextCallSibling",
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
      "inputs": [
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
          "name": "targetBlock",
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
      "constant": false,
      "inputs": [
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
          "name": "targetBlock",
          "type": "uint256"
        },
        {
          "name": "requiredGas",
          "type": "uint256"
        },
        {
          "name": "gracePeriod",
          "type": "uint8"
        },
        {
          "name": "basePayment",
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
      "constant": false,
      "inputs": [
        {
          "name": "abiSignature",
          "type": "bytes4"
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
          "name": "callAddress",
          "type": "address"
        }
      ],
      "name": "isKnownCall",
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
      "constant": false,
      "inputs": [
        {
          "name": "abiSignature",
          "type": "bytes4"
        },
        {
          "name": "callData",
          "type": "bytes"
        },
        {
          "name": "targetBlock",
          "type": "uint256"
        },
        {
          "name": "requiredGas",
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
      "constant": false,
      "inputs": [
        {
          "name": "contractAddress",
          "type": "address"
        },
        {
          "name": "callValue",
          "type": "uint256"
        },
        {
          "name": "abiSignature",
          "type": "bytes4"
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
          "name": "gracePeriod",
          "type": "uint8"
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
      "constant": false,
      "inputs": [
        {
          "name": "callData",
          "type": "bytes"
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
      "constant": false,
      "inputs": [
        {
          "name": "contractAddress",
          "type": "address"
        },
        {
          "name": "abiSignature",
          "type": "bytes4"
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
          "name": "gracePeriod",
          "type": "uint8"
        },
        {
          "name": "basePayment",
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
      "constant": false,
      "inputs": [
        {
          "name": "contractAddress",
          "type": "address"
        },
        {
          "name": "abiSignature",
          "type": "bytes4"
        },
        {
          "name": "callValue",
          "type": "uint256"
        },
        {
          "name": "callData",
          "type": "bytes"
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
      "constant": false,
      "inputs": [
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
          "name": "args",
          "type": "uint256[4]"
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
        }
      ],
      "name": "getMinimumEndowment",
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
          "name": "abiSignature",
          "type": "bytes4"
        },
        {
          "name": "targetBlock",
          "type": "uint256"
        },
        {
          "name": "requiredGas",
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
      "name": "defaultPayment",
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
      "constant": false,
      "inputs": [
        {
          "name": "abiSignature",
          "type": "bytes4"
        },
        {
          "name": "callData",
          "type": "bytes"
        },
        {
          "name": "requiredStackDepth",
          "type": "uint16"
        },
        {
          "name": "gracePeriod",
          "type": "uint8"
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
      "constant": false,
      "inputs": [
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
          "name": "targetBlock",
          "type": "uint256"
        },
        {
          "name": "requiredGas",
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
      "inputs": [
        {
          "name": "blockNumber",
          "type": "uint256"
        }
      ],
      "name": "getNextCall",
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
      "inputs": [
        {
          "name": "callValue",
          "type": "uint256"
        },
        {
          "name": "contractAddress",
          "type": "address"
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
      "constant": false,
      "inputs": [
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
        }
      ],
      "name": "getMinimumEndowment",
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
      "constant": false,
      "inputs": [
        {
          "name": "abiSignature",
          "type": "bytes4"
        },
        {
          "name": "callData",
          "type": "bytes"
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
          "name": "gracePeriod",
          "type": "uint8"
        },
        {
          "name": "basePayment",
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
      "constant": false,
      "inputs": [
        {
          "name": "contractAddress",
          "type": "address"
        },
        {
          "name": "targetBlock",
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
      "name": "getDefaultDonation",
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
      "inputs": [],
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
      "constant": false,
      "inputs": [
        {
          "name": "abiSignature",
          "type": "bytes4"
        },
        {
          "name": "targetBlock",
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
      "constant": false,
      "inputs": [
        {
          "name": "contractAddress",
          "type": "address"
        },
        {
          "name": "targetBlock",
          "type": "uint256"
        },
        {
          "name": "callValue",
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
      "name": "getDefaultRequiredGas",
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
          "name": "abiSignature",
          "type": "bytes4"
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
          "name": "gracePeriod",
          "type": "uint8"
        },
        {
          "name": "basePayment",
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
      "constant": false,
      "inputs": [],
      "name": "updateDefaultPayment",
      "outputs": [],
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
          "name": "targetBlock",
          "type": "uint256"
        },
        {
          "name": "requiredGas",
          "type": "uint256"
        },
        {
          "name": "gracePeriod",
          "type": "uint8"
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
        }
      ],
      "name": "getMinimumEndowment",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "type": "function"
    },
    {
      "inputs": [],
      "type": "constructor"
    }
  ]);

  Explorer.contracts.Scheduler = Scheduler;
})();
