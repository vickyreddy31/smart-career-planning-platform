from rest_framework import serializers

from .models import (
    Skill,
    CareerPath,
    Roadmap,
    SkillGap
)

class SkillSerializer(serializers.ModelSerializer):

    class Meta:
        model = Skill
        fields = '__all__'


class CareerPathSerializer(serializers.ModelSerializer):

    class Meta:
        model = CareerPath
        fields = '__all__'


class RoadmapSerializer(serializers.ModelSerializer):

    class Meta:
        model = Roadmap
        fields = '__all__'


class SkillGapSerializer(serializers.ModelSerializer):

    class Meta:
        model = SkillGap
        fields = '__all__'