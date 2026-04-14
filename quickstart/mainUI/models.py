from django.db import models
from django.conf import settings
from django_mongodb_backend.fields import EmbeddedModelField, ArrayField
from django_mongodb_backend.models import EmbeddedModel

class Project(EmbeddedModel):
    text = models.CharField(max_length=100)
    fileStore = models.JSONField(default=dict)  # JSON field for fileStore
    mainFile = models.CharField(max_length=500, blank=True, null=True)  # string for mainFile
    
    def __str__(self):
        return self.text

class User(models.Model):
    username = models.CharField(max_length=200)
    password = models.CharField(max_length=200)
    name = models.CharField(max_length=200)
    projects = ArrayField(  
        EmbeddedModelField(Project),
        null=True,
        blank=True,
        default=list
    )

    class Meta:
        db_table = "Users"
        managed = False

    def __str__(self):
        return self.username  # Fixed: changed from self.title to self.username



