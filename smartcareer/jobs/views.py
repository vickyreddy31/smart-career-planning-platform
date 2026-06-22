# jobs/views.py

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from accounts.models import User
from profiles.models import Profile

from .models import Job
from .serializers import JobSerializer

from .services import match_jobs


class JobListView(APIView):

    permission_classes = [AllowAny]

    def get(self, request):

        jobs = Job.objects.all()

        serializer = JobSerializer(
            jobs,
            many=True
        )

        return Response(
            serializer.data
        )


from accounts.models import User

class JobRecommendationView(APIView):

    permission_classes = [AllowAny]

    def get(self, request):

        user = User.objects.get(
            username='vicky'
        )

        profile = Profile.objects.get(
            user=user
        )

        user_skills = [
            skill.strip()
            for skill in profile.skills.split(',')
        ]

        jobs = match_jobs(
            user_skills
        )

        return Response(jobs)
from .models import (
    Job,
    SavedJob,
    Application
)

from .serializers import (
    SavedJobSerializer,
    ApplicationSerializer
)

from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
class SaveJobView(generics.CreateAPIView):

    serializer_class = SavedJobSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
class SavedJobListView(generics.ListAPIView):

    serializer_class = SavedJobSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return SavedJob.objects.filter(
            user=self.request.user
        )
class ApplyJobView(generics.CreateAPIView):

    serializer_class = ApplicationSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
class ApplicationListView(generics.ListAPIView):

    serializer_class = ApplicationSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Application.objects.filter(
            user=self.request.user
        )