from rest_framework import generics
from rest_framework.permissions import AllowAny

from .models import Resume
from .serializers import ResumeSerializer

from profiles.models import Profile
from accounts.models import User

import PyPDF2


def extract_skills_from_pdf(pdf_file):

    reader = PyPDF2.PdfReader(pdf_file)

    text = ""

    for page in reader.pages:
        page_text = page.extract_text()

        if page_text:
            text += page_text

    text = text.lower()

    skills_db = [
    "python",
    "django",
    "react",
    "javascript",
    "typescript",
    "html",
    "css",
    "mysql",
    "postgresql",
    "mongodb",
    "git",
    "github",
    "power bi",
    "tableau",
    "pandas",
    "numpy",
    "machine learning",
    "deep learning",
    "tensorflow",
    "pytorch",
    "docker",
    "aws",
    "sql"
]
    found_skills = []

    for skill in skills_db:

        if skill in text:

            found_skills.append(skill)

    return found_skills


class ResumeCreateView(generics.CreateAPIView):

    serializer_class = ResumeSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):

        user = User.objects.first()

        resume = serializer.save(
            user=user
        )

        skills = extract_skills_from_pdf(
            resume.resume_file
        )

        print("EXTRACTED SKILLS:", skills)

        profile, created = Profile.objects.get_or_create(
            user=user,
            defaults={
                "education": "",
                "skills": "",
                "address": ""
            }
        )

        profile.skills = ",".join(skills)

        profile.save()


class ResumeListView(generics.ListAPIView):

    serializer_class = ResumeSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):

        return Resume.objects.filter(
            user=self.request.user
        )


class ResumeDetailView(generics.RetrieveAPIView):

    serializer_class = ResumeSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):

        return Resume.objects.filter(
            user=self.request.user
        )


class ResumeDeleteView(generics.DestroyAPIView):

    serializer_class = ResumeSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):

        return Resume.objects.filter(
            user=self.request.user
        )