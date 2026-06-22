import { useState, useEffect } from "react";
import { getDashboardStats } from "../services/dashboardService";
import HomeButton from "../components/HomeButton";

function SkillGapPage() {

  const [stats, setStats] = useState({});

  useEffect(() => {

    getDashboardStats()
      .then((res) => {
        setStats(res);
      })
      .catch(console.error);

  }, []);

  return (

    <>
      <HomeButton />

      <div
        style={{
          minHeight: "100vh",
          padding: "40px",
          background:
            "linear-gradient(135deg,#0f172a,#1e293b)"
        }}
      >

        <h1
          style={{
            color: "white",
            textAlign: "center",
            marginBottom: "40px"
          }}
        >
          🎯 Career Growth Analysis
        </h1>

        {/* Recommended Career */}

        <div style={card}>

          <h2>
            🎯 Recommended Career
          </h2>

          <h1
            style={{
              color: "#4f46e5"
            }}
          >
            {stats.recommended_career}
          </h1>

        </div>

        {/* Resume Score */}

        <div style={card}>

          <h2>
            📊 Resume Score
          </h2>

          <div
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              background: `conic-gradient(
                #4f46e5 ${(
                  stats.resume_score || 0
                ) * 3.6}deg,
                #e5e7eb 0deg
              )`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto"
            }}
          >

            <div
              style={{
                width: "140px",
                height: "140px",
                background: "white",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "30px",
                fontWeight: "bold"
              }}
            >
              {stats.resume_score}%
            </div>

          </div>

        </div>

        {/* Missing Skills */}

        <div style={card}>

          <h2>
            ❌ Missing Skills
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(180px,1fr))",
              gap: "15px"
            }}
          >

            {
              stats.missing_skills?.map(
                (skill, index) => (

                  <div
                    key={index}
                    style={{
                      background: "#fee2e2",
                      padding: "20px",
                      borderRadius: "15px",
                      textAlign: "center"
                    }}
                  >

                    <h3>
                      {skill}
                    </h3>

                    <p>
                      Need Improvement
                    </p>

                  </div>

                )
              )
            }

          </div>

        </div>

        <div style={card}>

  <h2>
    📈 Improvement Suggestions
  </h2>

  <ul>

    {
      stats.missing_skills?.map(
        (skill, index) => (

          <li key={index}>
            Learn {skill}
          </li>

        )
      )
    }

    <li>
      Build Projects
    </li>

    <li>
      Practice Interview Questions
    </li>

  </ul>

</div>

        {/* Roadmap */}

        <div style={card}>

          <h2>
            🛣 Career Roadmap
          </h2>

          {
            stats.missing_skills?.map(
              (skill, index) => (

                <div
                  key={index}
                  style={{
                    display: "flex",
                    marginTop: "25px"
                  }}
                >

                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "#4f46e5",
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: "20px"
                    }}
                  >
                    {index + 1}
                  </div>

                  <div>

                    <h3>
                      Learn {skill}
                    </h3>

                    <p>
                      Complete project and practice
                      exercises for {skill}
                    </p>

                  </div>

                </div>

              )
            )
          }

        </div>

      </div>

    </>
  );

}

const card = {

  background: "white",

  borderRadius: "20px",

  padding: "30px",

  maxWidth: "1000px",

  margin: "auto",

  marginBottom: "25px"

};

export default SkillGapPage;