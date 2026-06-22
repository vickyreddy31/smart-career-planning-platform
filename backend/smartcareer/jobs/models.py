from django.db import models

from careers.models import Skill
from careers.models import CareerPath


class Job(models.Model):

    title = models.CharField(
        max_length=200
    )

    company = models.CharField(
        max_length=200
    )

    location = models.CharField(
        max_length=200
    )

    description = models.TextField()

    career_path = models.ForeignKey(
        CareerPath,
        on_delete=models.CASCADE
    )

    required_skills = models.ManyToManyField(
        Skill
    )

    salary = models.CharField(
        max_length=100
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.title
from django.conf import settings


class SavedJob(models.Model):

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )

    job = models.ForeignKey(
        'Job',
        on_delete=models.CASCADE
    )

    saved_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return f"{self.user.username} - {self.job.title}"


class Application(models.Model):

    STATUS_CHOICES = [

        ('Applied', 'Applied'),
        ('Shortlisted', 'Shortlisted'),
        ('Rejected', 'Rejected'),
        ('Selected', 'Selected')

    ]

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )

    job = models.ForeignKey(
        'Job',
        on_delete=models.CASCADE
    )

    applied_at = models.DateTimeField(
        auto_now_add=True
    )

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='Applied'
    )

    def __str__(self):
        return f"{self.user.username} - {self.job.title}"