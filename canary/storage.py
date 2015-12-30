from django.contrib.staticfiles.storage import (
    CachedFilesMixin,
    ManifestFilesMixin,
)

from pipeline.storage import PipelineMixin

from s3_folder_storage.s3 import StaticStorage


class S3PipelineCachedStorage(PipelineMixin, CachedFilesMixin, StaticStorage):
    pass


class S3PipelineManifestStorage(PipelineMixin, ManifestFilesMixin, StaticStorage):
    pass
