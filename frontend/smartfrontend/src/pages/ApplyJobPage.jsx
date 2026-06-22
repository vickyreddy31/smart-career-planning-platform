import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ApplyJobPage() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    education: "",
    resume: null
  });

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    fontSize: "16px"
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFile = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0]
    });
  };

 const handleSubmit = (e) => {

  e.preventDefault();

  const job =
    JSON.parse(
      localStorage.getItem("selectedJob")
    );

  const applications =
    JSON.parse(
      localStorage.getItem("applications")
    ) || [];

  applications.push({

    title:
      job?.title || "Unknown Job",

    company:
      job?.company || "Unknown Company",

    date:
      new Date().toLocaleDateString()

  });

  localStorage.setItem(
    "applications",
    JSON.stringify(applications)
  );

  alert(
    "Application Submitted Successfully"
  );

  navigate("/applied-jobs");

};

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg,#667eea,#764ba2,#6b73ff)",
        padding: "20px"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "550px",
          background: "white",
          padding: "35px",
          borderRadius: "20px",
          boxShadow:
            "0 20px 50px rgba(0,0,0,0.2)"
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "10px"
          }}
        >
          Apply For Job
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "25px"
          }}
        >
          Fill the form below
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <select
            name="gender"
            onChange={handleChange}
            style={inputStyle}
            required
          >
            <option value="">
              Select Gender
            </option>

            <option value="Male">
              Male
            </option>

            <option value="Female">
              Female
            </option>

          </select>

          <input
            type="text"
            name="education"
            placeholder="Education"
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <input
            type="file"
            onChange={handleFile}
            style={inputStyle}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              border: "none",
              borderRadius: "10px",
              background:
                "linear-gradient(135deg,#667eea,#764ba2)",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Submit Application
          </button>

        </form>

      </div>
    </div>
  );
}

export default ApplyJobPage;