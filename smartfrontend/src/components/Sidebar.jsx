import { Link, useNavigate } from "react-router-dom";

function Sidebar() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/");

  };

  return (

    <div
      style={{
        width: "250px",
        height: "100vh",
        background:
          "linear-gradient(180deg,#6d28d9,#4f46e5)",
        color: "white",
        position: "fixed",
        left: 0,
        top: 0,
        padding: "30px 20px",
        boxSizing: "border-box"
      }}
    >

      <h2
        style={{
          textAlign: "center",
          marginBottom: "40px"
        }}
      >
        Smart Career
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px"
        }}
      >

        <Link
          to="/dashboard"
          style={linkStyle}
        >
          🏠 Dashboard
        </Link>

        <Link
          to="/resume"
          style={linkStyle}
        >
          📄 Resume
        </Link>

        <Link
          to="/careers"
          style={linkStyle}
        >
          🎯 Careers
        </Link>

        <Link
          to="/jobs"
          style={linkStyle}
        >
          💼 Jobs
        </Link>

        <Link
          to="/applied-jobs"
          style={linkStyle}
        >
          📌 Applied Jobs
        </Link>

       

        <Link
          to="/skill-gap"
          style={linkStyle}
        >
          📊 Skill Gap
        </Link>

        <Link
          to="/reports"
          style={linkStyle}
        >
          📑 Reports
        </Link>

      </div>

      <button
        onClick={handleLogout}
        style={{
          position: "absolute",
          bottom: "30px",
          left: "20px",
          right: "20px",
          padding: "12px",
          border: "none",
          borderRadius: "10px",
          background: "white",
          color: "#4f46e5",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        Logout
      </button>

    </div>

  );

}

const linkStyle = {

  color: "white",

  textDecoration: "none",

  padding: "12px",

  borderRadius: "10px",

  background:
    "rgba(255,255,255,0.1)",

  transition: "0.3s"

};

export default Sidebar;