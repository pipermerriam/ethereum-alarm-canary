import os
import json

from populus.contracts import Contract

import alarm_web


BASE_DIR = os.path.dirname(alarm_web.__file__)
CONTRACT_ABI_PATH = os.path.join(BASE_DIR, 'versions', 'v0.7', 'build', 'contracts.json')


contract_json = json.loads(open(CONTRACT_ABI_PATH).read())


future_block_call_meta = contract_json['FutureBlockCall']
FutureBlockCall = Contract(future_block_call_meta, "FutureBlockCall")


scheduler = contract_json['Scheduler']
Scheduler = Contract(scheduler, "Scheduler")


scheduler_lib = contract_json['SchedulerLib']
SchedulerLib = Contract(scheduler_lib, "SchedulerLib")
