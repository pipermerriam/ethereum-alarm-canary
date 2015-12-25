contract Scheduler {
    function scheduleCall(address contractAddress, bytes4 abiSignature, uint targetBlock, uint suggestedGas, uint8 gracePeriod, uint basePayment, uint baseFee) public returns (address);
    function isKnownCall(address callAddress) constant returns (bool);
}

contract CallContract {
    function targetBlock() constant returns (uint) {
}
