from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length= 108)
    target_savings = models.IntegerField()
    saved = models.IntegerField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)