import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import "./Auth.css";

function LoginPage() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/api/login/",
        {
          username,
          password
        }
      );

      localStorage.setItem(
        "access",
        response.data.access
      );

      localStorage.setItem(
        "refresh",
        response.data.refresh
      );

      alert("Login Successful");

      navigate("/dashboard");

    } catch (error) {

      console.error(error);

     alert(
  "User not registered. Please register first."
);
    }
  };

  return (
    <div className="auth-container">

      <div className="auth-card">

       <h1>🚀 Smart Career</h1>

<p>
  AI Powered Career Guidance System
</p>

        <form onSubmit={handleLogin}>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button type="submit">
            Login
          </button>
          <p style={{ marginTop: "15px" }}>
  New User?
</p>

<button
  type="button"
  onClick={() => navigate("/register")}
>
  Register
</button>

        </form>

        <p style={{ marginTop: "15px" }}>
          Don't have an account?{" "}
          <Link to="/register">
            Register
          </Link>
        </p>

      </div>

    </div>
  );
}

export default LoginPage;
