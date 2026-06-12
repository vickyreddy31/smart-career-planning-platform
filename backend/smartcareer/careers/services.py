from .models import CareerPath

def recommend_career(user_skills):

    careers = CareerPath.objects.all()

    recommendations = []

    for career in careers:

        required_skills = list(
            career.required_skills.values_list(
                'name',
                flat=True
            )
        )

        matched = len(
            set(user_skills).intersection(
                required_skills
            )
        )

        recommendations.append({

            "career": career.title,

            "match_score":
            round(
                matched /
                len(required_skills)
                * 100,
                2
            )
        })

    recommendations.sort(
        key=lambda x:
        x["match_score"],
        reverse=True
    )

    return recommendations