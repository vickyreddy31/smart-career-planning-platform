from rest_framework import generics
from rest_framework.permissions import AllowAny
from .models import Resume
from .serializers import ResumeSerializer


from accounts.models import User

class ResumeCreateView(generics.CreateAPIView):

    serializer_class = ResumeSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):

        user = User.objects.first()

        serializer.save(user=user)


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

