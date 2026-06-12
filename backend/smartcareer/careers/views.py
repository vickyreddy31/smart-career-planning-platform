from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from accounts.models import User
from profiles.models import Profile

from .models import CareerPath, Roadmap
from .serializers import RoadmapSerializer
from .services import recommend_career


class CareerRecommendationView(APIView):

    permission_classes = [AllowAny]

    def get(self, request):

        user = User.objects.first()

        profile = Profile.objects.get(
            user=user
        )

        user_skills = [
            skill.strip()
            for skill in profile.skills.split(',')
        ]

        data = recommend_career(
            user_skills
        )

        return Response(data)


class SkillGapView(APIView):

    permission_classes = [AllowAny]

    def get(self, request, career_id):

        user = User.objects.first()

        profile = Profile.objects.get(
            user=user
        )

        user_skills = [
            skill.strip()
            for skill in profile.skills.split(',')
        ]

        career = CareerPath.objects.get(
            id=career_id
        )

        required_skills = list(
            career.required_skills.values_list(
                'name',
                flat=True
            )
        )

        missing = list(
            set(required_skills) - set(user_skills)
        )

        return Response({
            "career": career.title,
            "missing_skills": missing
        })


class RoadmapView(APIView):

    permission_classes = [AllowAny]

    def get(self, request, career_id):

        roadmap = Roadmap.objects.filter(
            career_id=career_id
        ).order_by(
            'step_no'
        )

        serializer = RoadmapSerializer(
            roadmap,
            many=True
        )

        return Response(
            serializer.data
        )