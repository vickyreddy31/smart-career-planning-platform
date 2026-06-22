from django.urls import path

from .views import (
    ResumeCreateView,
    ResumeListView,
    ResumeDetailView,
    ResumeDeleteView
)

urlpatterns = [

    path(
        'upload/',
        ResumeCreateView.as_view(),
        name='resume-upload'
    ),

    path(
        '',
        ResumeListView.as_view(),
        name='resume-list'
    ),

    path(
        '<int:pk>/',
        ResumeDetailView.as_view(),
        name='resume-detail'
    ),

    path(
        'delete/<int:pk>/',
        ResumeDeleteView.as_view(),
        name='resume-delete'
    ),
]