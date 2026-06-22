from .models import CareerPath


def recommend_career(user_skills):

    user_skills = [
        skill.strip().lower()
        for skill in user_skills
    ]

    careers = CareerPath.objects.all()

    recommendations = []

    for career in careers:

        required_skills = [

            skill.strip().lower()

            for skill in career.required_skills.values_list(
                'name',
                flat=True
            )

        ]

        matched = len(
            set(user_skills)
            &
            set(required_skills)
        )

        score = 0

        if len(required_skills) > 0:

            score = (
                matched /
                len(required_skills)
            ) * 100

        missing_skills = list(
            set(required_skills)
            -
            set(user_skills)
        )

        recommendations.append({

            "career": career.title,

            "match_score": round(
                score,
                2
            ),

            "missing_skills":
            missing_skills,

            "courses": [

                f"Learn {skill}"

                for skill in missing_skills

            ]

        })

    recommendations.sort(
        key=lambda x: x["match_score"],
        reverse=True
    )

    return recommendations