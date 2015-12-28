from rest_framework import serializers


class CanarySerializer(serializers.Serializer):
    is_alive = serializers.SerializerMethodField('isAlive')
    heartbeat_count = serializers.SerializerMethodField('heartbeatCount')
