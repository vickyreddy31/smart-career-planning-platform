# jobs/services.py

from .models import Job


def match_jobs(user_skills):

    user_skills = [
        skill.strip().lower()
        for skill in user_skills
    ]

    recommendations = []

    jobs = Job.objects.all()

    for job in jobs:

        required = [
            skill.lower()
            for skill in job.required_skills.values_list(
                'name',
                flat=True
            )
        ]

    user_skills = [
    s.strip().lower()
    for s in user_skills
]

    required = [
    s.strip().lower()
    for s in required
]

    matched = len(
    set(user_skills)
    &
    set(required)
)
    score = 0

    if len(required) > 0:
            score = (
                matched /
                len(required)
            ) * 100

    recommendations.append({

            "job_id": job.id,
            "title": job.title,
            "company": job.company,
            "score": round(score, 2)

        })

    recommendations.sort(
        key=lambda x: x["score"],
        reverse=True
    )

    return recommendations