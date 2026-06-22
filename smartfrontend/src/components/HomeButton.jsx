import { useNavigate } from "react-router-dom";

function HomeButton() {

  const navigate = useNavigate();

  return (

    <button
      onClick={() =>
        navigate("/dashboard")
      }
      style={{
        position: "fixed",
        top: "20px",
        right: "30px",
        padding: "12px 25px",
        border: "none",
        borderRadius: "50px",
        background:
          "linear-gradient(135deg,#06b6d4,#3b82f6)",
        color: "white",
        fontWeight: "bold",
        fontSize: "15px",
        cursor: "pointer",
        boxShadow:
          "0 10px 25px rgba(59,130,246,0.4)",
        zIndex: 1000,
        transition: "0.3s"
      }}
    >
      🏠 Home
    </button>

  );

}

export default HomeButton;