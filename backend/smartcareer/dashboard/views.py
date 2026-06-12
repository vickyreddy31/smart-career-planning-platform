from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from accounts.models import User
from profiles.models import Profile
from resumes.models import Resume
from jobs.models import Job, Application
from careers.models import CareerPath, Skill


class DashboardStatsView(APIView):

    permission_classes = [AllowAny]

    def get(self, request):

        return Response({

            "total_users": User.objects.count(),
            "total_profiles": Profile.objects.count(),
            "total_resumes": Resume.objects.count(),
            "total_jobs": Job.objects.count(),
            "total_careers": CareerPath.objects.count(),
            "total_applications": Application.objects.count()

        })


class ApplicationReportView(APIView):

    permission_classes = [AllowAny]

    def get(self, request):

        applications = Application.objects.all()

        data = []

        for app in applications:

            data.append({

                "user": app.user.username,
                "job": app.job.title,
                "status": app.status

            })

        return Response(data)


# PASTE SkillReportView BELOW THIS

class SkillReportView(APIView):

    permission_classes = [AllowAny]

    def get(self, request):

        skills = Skill.objects.all()

        data = []

        for skill in skills:

            data.append({

                "skill": skill.name

            })

        return Response(data)