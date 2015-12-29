import os

import pytest


@pytest.fixture(scope="module", autouse=True)
def v6_project_dir():
    base_dir = os.path.dirname(os.path.dirname(__file__))
    project_dir = os.path.join(base_dir, "canary", "versions", "v0.6")
    os.environ["PROJECT_DIR"]  = project_dir
    return project_dir


@pytest.fixture(scope="session")
def denoms():
    from ethereum.utils import denoms as ether_denoms
    return ether_denoms


@pytest.fixture(scope="module")
def Canary(contracts):
    return contracts.Canary


@pytest.fixture()
def deploy_canary_contract(deployed_contracts, deploy_client, denoms, Canary):
    from populus.contracts import (
        deploy_contract,
    )
    from populus.utils import (
        get_contract_address_from_txn,
    )
    def _deploy_canary_contract(endowment=None, scheduler_address=None):
        if endowment is None:
            endowment = 5 * denoms.ether

        if scheduler_address is None:
            scheduler_address = deployed_contracts.Scheduler._meta.address

        deploy_txn_hash = deploy_contract(
            deploy_client,
            Canary,
            constructor_args=(scheduler_address,),
            gas=int(deploy_client.get_max_gas() * 0.95),
            value=endowment,
        )

        canary_address = get_contract_address_from_txn(deploy_client, deploy_txn_hash, 180)
        canary = Canary(canary_address, deploy_client)
        return canary
    return _deploy_canary_contract


@pytest.fixture()
def canary(deploy_canary_contract):
    return deploy_canary_contract()
