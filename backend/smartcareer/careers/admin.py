from django.contrib import admin

from .models import (
    Skill,
    CareerPath,
    Roadmap,
    SkillGap
)

admin.site.register(Skill)
admin.site.register(CareerPath)
admin.site.register(Roadmap)
admin.site.register(SkillGap)