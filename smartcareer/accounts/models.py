from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):

    ROLE_CHOICES = (
        ('student','Student'),
        ('admin','Admin'),
    )

    role = models.CharField(
        max_length=20,
        choices=ROLE_CHOICES,
        default='student'
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username