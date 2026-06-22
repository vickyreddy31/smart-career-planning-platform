import { useLocation, useNavigate } from "react-router-dom";

function JobDetailsPage() {

  const location = useLocation();
  const navigate = useNavigate();

  const job = location.state?.job;

  if (!job) {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "100px"
        }}
      >
        <h2>Job Not Found</h2>

        <button
          onClick={() => navigate("/jobs")}
        >
          Back to Jobs
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#0f172a,#1e3a8a,#7c3aed)",
        padding: "50px"
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "auto",
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(20px)",
          borderRadius: "25px",
          padding: "40px",
          color: "white"
        }}
      >
        <h1>{job.title}</h1>

        <h2>{job.company}</h2>

        <p>📍 {job.location}</p>

        <p>💰 {job.salary}</p>

        <p>⭐ Match Score: {job.score}%</p>

        <h2>Job Description</h2>

        <p>{job.description}</p>

        <h2>Required Skills</h2>

        <div>
          {job.required_skills?.map(
            (skill, index) => (
              <span
                key={index}
                style={{
                  display: "inline-block",
                  background: "#4f46e5",
                  padding: "8px 15px",
                  margin: "5px",
                  borderRadius: "20px"
                }}
              >
                {skill}
              </span>
            )
          )}
        </div>

        <button
onClick={() => {

localStorage.setItem(
"selectedJob",
JSON.stringify(job)
);

navigate("/apply-job");

}}
style={{



            marginTop: "30px",



            padding: "12px 25px",



            border: "none",



            borderRadius: "10px",



            background: "#22c55e",



            color: "white",



            cursor: "pointer"



          }}
>
Apply Now
</button>
      </div>
    </div>
  );
}

export default JobDetailsPage;