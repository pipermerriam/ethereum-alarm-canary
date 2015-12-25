import "libraries/Scheduler.sol";


contract Canary {
    uint aliveSince;
    uint lastHeartbeat;
    uint heartbeatCount;
    Scheduler scheduler;
    CallContract callContract;

    function Canary(address _scheduler) {
            data.scheduler = Scheduler(_scheduler);
    }

    function() {
        if (this.balance < 2 ether) {
            owner.send(this.balance);
        }
    }

    event Heartbeat(uint blockNumber, uint heartbeatCount, address callerAddress, address originAddress, address nextCallerAddress);

    function heartbeat() {
        // Ran out of funds.
        if (this.balance <= 2 ether) return;
        // Was not called when it was supposed to.
        if (address(callContract) != 0x0 && block.number > callContract.targetBlock() + 255) return;
        // Not being called by the callContract
        if (address(callContract) != 0x0 && msg.sender != address(callContract)) return;

        // Increment the heartbeat count
        heartbeatCount += 1;

        // schedule the call (~2 hours from now)
        address call_address = scheduler.scheduleCall.value(2 ether)(address(this), bytes4(sha3("heartbeat()")), 480, 1000000, 255, 1 finney, 0);
        if (call_address != 0x0) {
            callContract = CallContract(call_address);
        }

        // Log the heartbeat
        Heartbeat(block.number, heartbeatCount, msg.sender, tx.origin, address(callContract));
    }

    function isAlive() {
        if (address(callContract) == 0x0) return true;
        return (block.number < callContract.targetBlock() + 255)
    }
}
