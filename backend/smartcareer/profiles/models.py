from django.db import models
from accounts.models import User

class Profile(models.Model):

    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE
    )

    phone = models.CharField(
        max_length=15,
        blank=True
    )

    education = models.CharField(
        max_length=200
    )

    skills = models.TextField()

    address = models.TextField()

    def __str__(self):
        return self.user.username