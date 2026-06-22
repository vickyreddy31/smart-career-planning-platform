import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


import Sidebar from "../components/Sidebar";

import {
  getRecommendations
} from "../services/jobRecommendationService";

function JobPage() {

  const [jobs, setJobs] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {

    getRecommendations()
      .then((data) => {

        setJobs(data);

      })
      .catch((error) => {

        console.error(error);

      });

  }, []);

  return (
    <>
      <Sidebar />

      <div
        style={{
          marginLeft: "280px",
          padding: "40px"
        }}
      >

        <h1>
          Recommended Jobs
        </h1>

        {jobs.length === 0 ? (

          <p>
            No job recommendations found.
          </p>

        ) : (

          jobs.map((job, index) => (

            <div
              key={index}
              style={{
                background: "white",
                padding: "20px",
                marginTop: "20px",
                borderRadius: "12px",
                boxShadow:
                  "0 5px 20px rgba(0,0,0,0.1)"
              }}
            >

              <h2>
                {job.title}
              </h2>

              <p>
                Company: {job.company}
              </p>

              <p>
                Match Score:
                {" "}
                {job.score}%
              </p>

              <p>
                Missing Skills:
                {" "}
                {
                  job.missing_skills?.length > 0
                    ? job.missing_skills.join(", ")
                    : "None"
                }
              </p>

              <button
  onClick={() =>
    navigate("/job-details", {
      state: { job }
    })
  }
  style={{
    background:
      "linear-gradient(135deg,#6366f1,#8b5cf6)",
    color: "white",
    border: "none",
    padding: "12px 24px",
    borderRadius: "12px",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "15px",
    boxShadow:
      "0 8px 20px rgba(99,102,241,0.3)",
    transition: "all 0.3s ease"
  }}
  onMouseOver={(e) => {
    e.target.style.transform =
      "translateY(-3px)";
    e.target.style.boxShadow =
      "0 12px 25px rgba(99,102,241,0.4)";
  }}
  onMouseOut={(e) => {
    e.target.style.transform =
      "translateY(0px)";
    e.target.style.boxShadow =
      "0 8px 20px rgba(99,102,241,0.3)";
  }}
>
  View Details →
</button>
            </div>

          ))

        )}

      </div>
    </>
  );
}

export default JobPage;