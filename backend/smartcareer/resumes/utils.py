import pdfplumber

KNOWN_SKILLS = [

    "python",
    "django",
    "react",
    "mysql",
    "sql",
    "java",
    "javascript",
    "html",
    "css",
    "machine learning",
    "pandas",
    "numpy",
    "flask",
    "nodejs"

]

def extract_skills_from_resume(file_path):

    text = ""

    with pdfplumber.open(file_path) as pdf:

        for page in pdf.pages:

            text += page.extract_text() or ""

    text = text.lower()

    found_skills = []

    for skill in KNOWN_SKILLS:

        if skill in text:

            found_skills.append(skill)

    return found_skills