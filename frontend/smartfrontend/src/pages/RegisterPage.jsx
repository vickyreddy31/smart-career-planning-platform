import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Auth.css";

import { registerUser }
from "../services/registerService";

function RegisterPage() {

  const navigate = useNavigate();

  const [username, setUsername] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleRegister = async (e) => {

    e.preventDefault();

    try {

      await registerUser({

        username,
        email,
        password

      });

      alert(
        "Registration Successful"
      );

      navigate("/");

    } catch (error) {

      console.error(error);

      alert(
        "Registration Failed"
      );

    }

  };

  return (

    <div className="auth-container">

      <div className="auth-card">

        <h1>Create Account</h1>

        <p>
          Start your AI Career Journey
        </p>

        <form onSubmit={handleRegister}>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) =>
              setUsername(
                e.target.value
              )
            }
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
          />

          <button type="submit">
            Register
          </button>

        </form>

      </div>

    </div>
  );
}

export default RegisterPage;