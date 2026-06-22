from django.db import models
from django.conf import settings


class Skill(models.Model):

    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name


class CareerPath(models.Model):

    title = models.CharField(max_length=200)
    description = models.TextField()

    required_skills = models.ManyToManyField(
        Skill
    )

    def __str__(self):
        return self.title


class Roadmap(models.Model):

    career = models.ForeignKey(
        CareerPath,
        on_delete=models.CASCADE
    )

    step_no = models.IntegerField()

    title = models.CharField(max_length=200)

    description = models.TextField()

    def __str__(self):
        return f"{self.career.title} - Step {self.step_no}"


class SkillGap(models.Model):

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )

    career = models.ForeignKey(
        CareerPath,
        on_delete=models.CASCADE
    )

    missing_skills = models.TextField()

    created_at = models.DateTimeField(
        auto_now_add=True
    )