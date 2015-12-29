import pytest

from django.core.urlresolvers import reverse

from rest_framework import status


@pytest.mark.django_db
def test_canary_list_api_view(canary, deployed_contracts, deploy_client,
                              api_client, api_blockchain_client, settings,
                              deploy_canary_contract):
    canary_2 = deploy_canary_contract(
        scheduler_address=deployed_contracts.Scheduler._meta.address,
    )
    settings.CANARY_CONTRACT_ADDRESSES = [
        canary._meta.address,
        canary_2._meta.address,
    ]
    url = reverse('canary-list')

    response = api_client.get(url)
    assert response.status_code == status.HTTP_200_OK

    assert len(response.data['results']) == 2
