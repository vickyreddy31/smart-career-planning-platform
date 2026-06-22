import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { getCareers } from "../services/careerService";
import HomeButton
from "../components/HomeButton";

function CareerPage() {
  const [careers, setCareers] = useState([]);

  useEffect(() => {
    getCareers()
      .then((data) => {
        setCareers(data);

localStorage.setItem(
  "careerData",
  JSON.stringify(data)
);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
    <HomeButton />
      <Sidebar />

      <div
        style={{
          marginLeft: "280px",
          minHeight: "100vh",
          padding: "40px",
          background:
            "linear-gradient(135deg, #eef2ff, #f8fafc)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#1e293b",
            marginBottom: "40px",
            fontSize: "36px",
          }}
        >
          🚀 Career Recommendations
        </h1>

        {careers.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              background: "#fff",
              padding: "30px",
              borderRadius: "15px",
              boxShadow:
                "0 10px 25px rgba(0,0,0,0.08)",
            }}
          >
            <h3>Loading careers...</h3>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "25px",
            }}
          >
            {careers.map((career, index) => (
              <div
                key={index}
                style={{
                  background: "#ffffff",
                  borderRadius: "20px",
                  padding: "25px",
                  boxShadow:
                    "0 10px 25px rgba(0,0,0,0.08)",
                  transition: "0.3s",
                  borderTop: "5px solid #6366f1",
                }}
              >
                <div
                  style={{
                    fontSize: "40px",
                    marginBottom: "15px",
                  }}
                >
                  💼
                </div>

                <h2
                  style={{
                    color: "#4f46e5",
                    marginBottom: "15px",
                  }}
                >
                  {career.career}
                </h2>

                <div
                  style={{
                    background: "#f8faff",
                    padding: "15px",
                    borderRadius: "12px",
                  }}
                >
                  <h4
                    style={{
                      color: "#1e293b",
                      marginBottom: "10px",
                    }}
                  >
                    Missing Skills
                  </h4>

                  <p
                    style={{
                      color: "#64748b",
                      lineHeight: "1.6",
                    }}
                  >
                    {career.missing_skills?.length > 0
                      ? career.missing_skills.join(", ")
                      : "No missing skills found 🎉"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default CareerPage;