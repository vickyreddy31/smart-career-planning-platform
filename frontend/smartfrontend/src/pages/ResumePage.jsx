import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { uploadResume } from "../services/resumeService";
import HomeButton
from "../components/HomeButton";

function ResumePage() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!file) {
      alert("Please select a resume first");
      return;
    }

    const formData = new FormData();

    formData.append("title", file.name);
    formData.append("resume_file", file);

    try {
      await uploadResume(formData);

      setMessage("✅ Resume Uploaded Successfully");
    } catch (error) {
      console.log("FULL ERROR:", error);
      console.log("RESPONSE:", error.response);
      console.log("DATA:", error.response?.data);

      alert("Upload Failed");
    }
  };

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
        <div
          style={{
            maxWidth: "700px",
            margin: "40px auto",
            background: "rgba(255,255,255,0.95)",
            borderRadius: "25px",
            padding: "50px",
            textAlign: "center",
            boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
          }}
        >
          <div
            style={{
              fontSize: "60px",
              marginBottom: "15px",
            }}
          >
            📄
          </div>

          <h1
            style={{
              color: "#1e293b",
              marginBottom: "10px",
            }}
          >
            Upload Resume
          </h1>

          <p
            style={{
              color: "#64748b",
              marginBottom: "30px",
            }}
          >
            Upload your latest resume in PDF or DOC format
          </p>

          <div
            style={{
              border: "2px dashed #6366f1",
              borderRadius: "15px",
              padding: "30px",
              background: "#f8faff",
            }}
          >
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              style={{
                width: "100%",
                cursor: "pointer",
              }}
            />

            {file && (
              <p
                style={{
                  marginTop: "15px",
                  color: "#4f46e5",
                  fontWeight: "600",
                }}
              >
                Selected: {file.name}
              </p>
            )}
          </div>

          <button
            onClick={handleSubmit}
            style={{
              marginTop: "30px",
              padding: "14px 40px",
              background:
                "linear-gradient(135deg,#6366f1,#4f46e5)",
              color: "white",
              border: "none",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow:
                "0 8px 20px rgba(79,70,229,0.3)",
            }}
          >
            Submit Resume
          </button>

          {message && (
            <div
              style={{
                marginTop: "25px",
                padding: "15px",
                background: "#dcfce7",
                color: "#166534",
                borderRadius: "10px",
                fontWeight: "600",
              }}
            >
              {message}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ResumePage;