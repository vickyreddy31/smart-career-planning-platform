import Sidebar from "../components/Sidebar";
import "./Dashboard.css";

import { useState, useEffect } from "react";
import { getDashboardStats } from "../services/dashboardService";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const [stats, setStats] = useState({
    skills: 0,
    careers: 0,
    jobs: 0,
    resumes: 0,
    skill_list: [],
    resume_score: 0,
    recommended_career: "",
    missing_skills: [],
    recommended_courses: []
  });

  useEffect(() => {

    getDashboardStats()
      .then(setStats)
      .catch(console.error);

  }, []);

  return (
    <>
      <Sidebar />

      <div className="dashboard">

        <h1>
          🚀 Smart Career Dashboard
        </h1>

        {/* Top Cards */}

        <div className="cards">

          <div className="card">
            <h2>{stats.skills}</h2>
            <p>Skills</p>
          </div>

          <div className="card">
            <h2>{stats.careers}</h2>
            <p>Career Matches</p>
          </div>

          <div className="card">
            <h2>{stats.jobs}</h2>
            <p>Job Matches</p>
          </div>

          <div className="card">
            <h2>{stats.resumes}</h2>
            <p>Resumes</p>
          </div>

        </div>

        {/* Resume Score */}

        <div
          className="card"
          onClick={() => navigate("/resume-score")}
          style={{
            cursor: "pointer",
            marginTop: "20px"
          }}
        >
          <h2>
            {stats.resume_score || 0}%
          </h2>

          <p>
            Resume Score
          </p>
        </div>

        {/* Recommended Career */}

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            marginTop: "25px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.1)"
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
              stats.recommended_career ||
              "No Recommendation Available"
            }
          </h3>

        </div>

        {/* Detected Skills */}

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            marginTop: "25px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.1)"
          }}
        >
          <h2>
            💻 Detected Skills
          </h2>

          {
            stats.skill_list?.length > 0
              ? (
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px"
                  }}
                >
                  {
                    stats.skill_list.map(
                      (skill, index) => (

                        <div
                          key={index}
                          style={{
                            background: "#eef2ff",
                            color: "#4338ca",
                            padding: "10px 15px",
                            borderRadius: "30px",
                            fontWeight: "600"
                          }}
                        >
                          {skill}
                        </div>

                      )
                    )
                  }
                </div>
              )
              : (
                <p>
                  No skills detected
                </p>
              )
          }

        </div>

        {/* Missing Skills */}

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            marginTop: "25px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.1)"
          }}
        >
          <h2>
            ⚠ Missing Skills
          </h2>

          {
            stats.missing_skills?.length > 0
              ? (
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px"
                  }}
                >
                  {
                    stats.missing_skills.map(
                      (skill, index) => (

                        <div
                          key={index}
                          style={{
                            background: "#fff7ed",
                            color: "#ea580c",
                            padding: "10px 15px",
                            borderRadius: "30px",
                            fontWeight: "600"
                          }}
                        >
                          {skill}
                        </div>

                      )
                    )
                  }
                </div>
              )
              : (
                <p>
                  No missing skills 🎉
                </p>
              )
          }

        </div>

        {/* Recommended Courses */}

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            marginTop: "25px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.1)"
          }}
        >

          <h2>
            🎓 Recommended Courses
          </h2>

          {
            stats.recommended_courses?.length > 0
              ? (

                <div>

                  {

                    stats.recommended_courses.map(
                      (course, index) => (

                        <a
                          key={index}
                          href={course.url}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            textDecoration: "none"
                          }}
                        >

                          <div
                            style={{
                              padding: "15px",
                              marginBottom: "12px",
                              borderRadius: "12px",
                              border: "1px solid #ddd",
                              background: "#f8fafc",
                              cursor: "pointer"
                            }}
                          >

                            🎓 {course.title}

                          </div>

                        </a>

                      )
                    )

                  }

                </div>

              )
              : (

                <p>
                  No courses recommended
                </p>

              )
          }

        </div>

        {/* Skill Gap Analysis */}

        <div
          className="card"
          onClick={() => navigate("/skill-gap")}
          style={{
            cursor: "pointer",
            marginTop: "25px"
          }}
        >

          <h2>
            📊
          </h2>

          <p>
            Skill Gap Analysis
          </p>

        </div>

      </div>
    </>
  );
}

export default Dashboard;