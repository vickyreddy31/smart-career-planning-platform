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
            skill.name.lower()
            for skill in job.required_skills.all()
        ]

        matched = list(
            set(user_skills)
            &
            set(required)
        )

        missing = list(
            set(required)
            -
            set(user_skills)
        )

        score = 0

        if len(required) > 0:

            score = (
                len(matched)
                /
                len(required)
            ) * 100

        recommendations.append({


"job_id": job.id,

"title": job.title,

"company": job.company,

"location": job.location,

"salary": job.salary,

"description": job.description,

"required_skills": required,

"score": round(score, 2),

"matched_skills": matched,

"missing_skills": missing,

"courses": [

    f"Learn {skill}"
    for skill in missing

]


})

    recommendations.sort(
        key=lambda x: x["score"],
        reverse=True
    )

    return recommendations