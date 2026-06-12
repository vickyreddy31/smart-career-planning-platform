from django.urls import path

from .views import (
    CareerRecommendationView,
    SkillGapView,
    RoadmapView
)

urlpatterns = [

    path(
        'recommendations/',
        CareerRecommendationView.as_view()
    ),

    path(
        'skill-gap/<int:career_id>/',
        SkillGapView.as_view()
    ),

    path(
        'roadmap/<int:career_id>/',
        RoadmapView.as_view()
    ),
]