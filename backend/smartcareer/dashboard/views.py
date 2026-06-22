from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from profiles.models import Profile
from resumes.models import Resume
from jobs.models import Job, Application
from careers.models import CareerPath, Skill


class DashboardStatsView(APIView):

    permission_classes = [AllowAny]

    def get(self, request):

        profile = Profile.objects.first()

        skills = []

        if profile and profile.skills:

            skills = [

                skill.strip().lower()

                for skill in profile.skills.split(",")

            ]

        total_expected_skills = 15

        resume_score = min(

            round(

                (len(skills) / total_expected_skills) * 100

            ),

            100

        )

        careers = CareerPath.objects.all()

        best_career = None

        best_match = 0

        missing_skills = []

        for career in careers:

            required_skills = [

                skill.name.lower()

                for skill in career.required_skills.all()

            ]

            matched = len(

                set(skills)

                &

                set(required_skills)

            )

            score = 0

            if len(required_skills) > 0:

                score = (

                    matched

                    /

                    len(required_skills)

                ) * 100

            if score > best_match:

                best_match = score

                best_career = career.title

                missing_skills = list(

                    set(required_skills)

                    -

                    set(skills)

                )

        course_map = {

    "react": {
        "title": "React Complete Guide",
        "url":
        "https://www.youtube.com/results?search_query=react+tutorial"
    },

    "django": {
        "title": "Django Web Development",
        "url":
        "https://www.youtube.com/results?search_query=django+tutorial"
    },

    "javascript": {
        "title": "Modern JavaScript",
        "url":
        "https://www.youtube.com/results?search_query=javascript+tutorial"
    },

    "aws": {
        "title": "AWS Cloud Practitioner",
        "url":
        "https://www.youtube.com/results?search_query=aws+tutorial"
    },

    "power bi": {
        "title": "Power BI Dashboard Masterclass",
        "url":
        "https://www.youtube.com/results?search_query=power+bi+tutorial"
    },

    "machine learning": {
        "title": "Machine Learning A-Z",
        "url":
        "https://www.youtube.com/results?search_query=machine+learning+tutorial"
    },

    "docker": {
        "title": "Docker for Beginners",
        "url":
        "https://www.youtube.com/results?search_query=docker+tutorial"
    },

    "kubernetes": {
        "title": "Kubernetes Fundamentals",
        "url":
        "https://www.youtube.com/results?search_query=kubernetes+tutorial"
    }

}
        recommended_courses = []

        for skill in missing_skills:

            if skill.lower() in course_map:

                recommended_courses.append(
                    course_map[skill.lower()]
                )

            else:

                recommended_courses.append({

                    "title":
                    f"Learn {skill}",

                    "url":
                    f"https://www.youtube.com/results?search_query={skill}+tutorial"

                })

        return Response({

            "skills": len(skills),

            "careers": CareerPath.objects.count(),

            "jobs": Job.objects.count(),

            "resumes": Resume.objects.count(),

            "skill_list": skills,

            "resume_score": resume_score,

            "recommended_career": best_career,

            "missing_skills": missing_skills,

            "recommended_courses":
            recommended_courses,

            "skill_gap_chart": [

                {
                    "skill": skill,
                    "gap": 100
                }

                for skill in missing_skills

            ]

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