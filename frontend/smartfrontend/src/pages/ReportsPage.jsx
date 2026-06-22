import Sidebar from "../components/Sidebar";
import HomeButton from "../components/HomeButton";

function ReportsPage() {

  const applications =
    JSON.parse(
      localStorage.getItem("applications")
    ) || [];

  const careers =
    JSON.parse(
      localStorage.getItem("careerData")
    ) || [];

  const bestCareer =
    careers.length > 0
      ? careers[0]
      : {};

  return (
    <>
      <HomeButton />

      <Sidebar />

      <div
        style={{
          marginLeft: "280px",
          padding: "40px",
          minHeight: "100vh",
          background:
            "linear-gradient(135deg,#eef2ff,#f8fafc)"
        }}
      >

        <h1
          style={{
            color: "#1e293b",
            marginBottom: "30px"
          }}
        >
          📊 My Progress Report
        </h1>

        {/* Statistics Cards */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px"
          }}
        >

          <div
            style={{
              background:
                "linear-gradient(135deg,#4f46e5,#7c3aed)",
              color: "white",
              padding: "25px",
              borderRadius: "20px"
            }}
          >
            <h1>
              {
                bestCareer.match_score
                  ? `${bestCareer.match_score}%`
                  : "0%"
              }
            </h1>

            <p>
              Resume Score
            </p>
          </div>

          <div
            style={{
              background:
                "linear-gradient(135deg,#06b6d4,#3b82f6)",
              color: "white",
              padding: "25px",
              borderRadius: "20px"
            }}
          >
            <h1>
              {careers.length}
            </h1>

            <p>
              Career Matches
            </p>
          </div>

          <div
            style={{
              background:
                "linear-gradient(135deg,#10b981,#22c55e)",
              color: "white",
              padding: "25px",
              borderRadius: "20px"
            }}
          >
            <h1>
              {applications.length}
            </h1>

            <p>
              Applications Submitted
            </p>
          </div>

          <div
            style={{
              background:
                "linear-gradient(135deg,#f59e0b,#ef4444)",
              color: "white",
              padding: "25px",
              borderRadius: "20px"
            }}
          >
            <h1>
              {
                bestCareer.career
                  ? "1"
                  : "0"
              }
            </h1>

            <p>
              Best Career Match
            </p>
          </div>

        </div>

        {/* Best Career */}

        <div
          style={{
            background: "white",
            padding: "25px",
            marginTop: "30px",
            borderRadius: "20px",
            boxShadow:
              "0 5px 20px rgba(0,0,0,0.1)"
          }}
        >

          <h2>
            🎯 Recommended Career
          </h2>

          <h3
            style={{
              color: "#4f46e5"
            }}
          >
            {
              bestCareer.career ||
              "No Career Found"
            }
          </h3>

        </div>

        {/* Missing Skills */}

        <div
          style={{
            background: "white",
            padding: "25px",
            marginTop: "30px",
            borderRadius: "20px",
            boxShadow:
              "0 5px 20px rgba(0,0,0,0.1)"
          }}
        >

          <h2>
            ⚠ Missing Skills
          </h2>

          {
            bestCareer.missing_skills?.length > 0
            ? (

              <ul>

                {
                  bestCareer.missing_skills.map(
                    (skill,index)=>(
                      <li key={index}>
                        {skill}
                      </li>
                    )
                  )
                }

              </ul>

            )
            : (

              <p>
                No Missing Skills 🎉
              </p>

            )
          }

        </div>

        {/* Recommended Courses */}

        <div
          style={{
            background: "white",
            padding: "25px",
            marginTop: "30px",
            borderRadius: "20px",
            boxShadow:
              "0 5px 20px rgba(0,0,0,0.1)"
          }}
        >

          <h2>
            🎓 Recommended Courses
          </h2>

          {
            bestCareer.courses?.length > 0
            ? (

              <ul>

                {
                  bestCareer.courses.map(
                    (course,index)=>(
                      <li key={index}>
                        {course}
                      </li>
                    )
                  )
                }

              </ul>

            )
            : (

              <p>
                No Courses Available
              </p>

            )
          }

        </div>

      </div>

    </>
  );
}

export default ReportsPage;