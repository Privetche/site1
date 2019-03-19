from django.conf import settings
from django.db import models
from django.utils import timezone


class Post(models.Model):

    text = models.TextField()

    def publish(self):
        self.published_date = timezone.now()
        self.save()
