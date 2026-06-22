import React from "react";

function ResumeScorePage() {

  const score = 85;

  return (

    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#0f172a,#1e293b,#334155)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >

      <div
        style={{
          background: "white",
          padding: "50px",
          borderRadius: "25px",
          width: "500px",
          textAlign: "center",
          boxShadow:
            "0 20px 40px rgba(0,0,0,0.3)"
        }}
      >

        <h1>
          Resume Analysis
        </h1>

        <div
          style={{
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            margin: "30px auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "40px",
            fontWeight: "bold",
            color: "white",
            background:
              "linear-gradient(135deg,#06b6d4,#3b82f6)"
          }}
        >
          {score}%
        </div>

        <h2>
          Excellent Resume
        </h2>

        <p>
          Your resume matches most
          industry requirements.
        </p>

      </div>

    </div>

  );

}

export default ResumeScorePage;