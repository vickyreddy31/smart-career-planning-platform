import React from "react";
import HomeButton
from "../components/HomeButton";

function AppliedJobsPage() {

  const jobs =
    JSON.parse(
      localStorage.getItem("applications")
    ) || [];

  return (
    

    <div
      style={{
        padding: "40px"
      }}
    >

      <h1>
        Applied Jobs
      </h1>

      {
        jobs.length === 0 ? (

          <p>
            No applications found
          </p>

        ) : (

          jobs.map((job, index) => (

            <div
              key={index}
              style={{
                background: "#fff",
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
                Applied On:
                {job.date}
              </p>

            </div>

          ))

        )
      }
    <HomeButton />
    </div>

  );

}

export default AppliedJobsPage;