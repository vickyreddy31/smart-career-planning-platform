from django.urls import path

from .views import (
    DashboardStatsView,
    ApplicationReportView,
    SkillReportView
)

urlpatterns = [

    path(
        'stats/',
        DashboardStatsView.as_view()
    ),

    path(
        'applications/',
        ApplicationReportView.as_view()
    ),

    path(
        'skills/',
        SkillReportView.as_view()
    ),

]