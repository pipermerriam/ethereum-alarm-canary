from canary.serializers import CanarySerializer


def test_canary_serializer(canary, deploy_client):
    serializer = CanarySerializer(canary)
    data = serializer.data

    assert data['address'] == canary._meta.address
    assert canary.isAlive() is False
    assert data['is_alive'] is False
    assert canary.heartbeatCount() == 0
    assert data['heartbeat_count'] == 0
