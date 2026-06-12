from django.urls import path

from .views import (
    JobListView,
    JobRecommendationView,
    SaveJobView,
    SavedJobListView,
    ApplyJobView,
    ApplicationListView
)

urlpatterns = [

    path(
        '',
        JobListView.as_view(),
        name='job-list'
    ),

    path(
        'recommendations/',
        JobRecommendationView.as_view(),
        name='job-recommendations'
    ),

    path(
        'save/',
        SaveJobView.as_view(),
        name='save-job'
    ),

    path(
        'saved/',
        SavedJobListView.as_view(),
        name='saved-jobs'
    ),

    path(
        'apply/',
        ApplyJobView.as_view(),
        name='apply-job'
    ),

    path(
        'applications/',
        ApplicationListView.as_view(),
        name='applications'
    ),

]