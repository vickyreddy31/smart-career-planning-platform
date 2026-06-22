from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from profiles.models import Profile

from .models import CareerPath, Roadmap
from .serializers import RoadmapSerializer
from .services import recommend_career


class CareerRecommendationView(APIView):

    permission_classes = [AllowAny]

    def get(self, request):

        profile = Profile.objects.first()

        if not profile:
            return Response([])

        user_skills = [

            skill.strip()

            for skill in profile.skills.split(",")

            if skill.strip()

        ]

        data = recommend_career(
            user_skills
        )

        return Response(data)


class SkillGapView(APIView):

    permission_classes = [AllowAny]

    def get(self, request, career_id):

        profile = Profile.objects.first()

        if not profile:
            return Response({
                "career": "",
                "missing_skills": []
            })

        user_skills = [

            skill.strip()

            for skill in profile.skills.split(",")

            if skill.strip()

        ]

        career = CareerPath.objects.get(
            id=career_id
        )

        required_skills = list(

            career.required_skills.values_list(
                "name",
                flat=True
            )

        )

        missing = list(

            set(required_skills)
            -
            set(user_skills)

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
            "step_no"
        )

        serializer = RoadmapSerializer(
            roadmap,
            many=True
        )

        return Response(
            serializer.data
        )