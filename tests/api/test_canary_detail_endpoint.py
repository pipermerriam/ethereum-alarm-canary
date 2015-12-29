import pytest

from django.core.urlresolvers import (
    reverse,
    resolve,
)

from rest_framework import status


def test_url_with_0x_prefix(api_client):
    url = reverse(
        'canary-detail',
        kwargs={'address': '0x675e2c143295b8683b5aed421329c4df85f91b33'},
    )
    resolve(url)


def test_url_without_0x_prefix(api_client):
    url = reverse(
        'canary-detail',
        kwargs={'address': '675e2c143295b8683b5aed421329c4df85f91b33'},
    )
    resolve(url)


@pytest.mark.django_db
def test_canary_retrieve_api_view(canary, deployed_contracts, deploy_client,
                                  api_client, api_blockchain_client):
    url = reverse(
        'canary-detail',
        kwargs={'address': canary._meta.address},
    )
    response = api_client.get(url)
    assert response.status_code == status.HTTP_200_OK

    assert canary.isAlive() is False
    assert response.data['is_alive'] is False
    assert canary.heartbeatCount() == 0
    assert response.data['heartbeat_count'] == 0
