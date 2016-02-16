import os
import json

from populus.contracts import Contract

import alarm_web


BASE_DIR = os.path.dirname(alarm_web.__file__)
CONTRACT_ABI_PATH = os.path.join(BASE_DIR, 'versions', 'v0.6', 'build', 'contracts.json')


contract_json = json.loads(open(CONTRACT_ABI_PATH).read())


canary_meta = contract_json['Canary']
Canary = Contract(canary_meta, "Canary")
