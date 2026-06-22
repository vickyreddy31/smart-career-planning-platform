import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/login");

  };

  return (

    <nav className="navbar">

      <div className="logo">
        Smart Career
      </div>

      {
        token ? (

          <>
            <div className="nav-links">

              <Link to="/dashboard">
                Dashboard
              </Link>

              <Link to="/jobs">
                Jobs
              </Link>

              <Link to="/careers">
                Careers
              </Link>

              <Link to="/resume">
                Resume
              </Link>

            </div>

            <div className="nav-buttons">

              <button
                onClick={handleLogout}
                className="signup-btn"
              >
                Logout
              </button>

            </div>

          </>

        ) : (

          <>
            
            <div className="nav-buttons">

              <Link
                to="/login"
                className="login-btn"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="signup-btn"
              >
                Register
              </Link>

            </div>

          </>

        )
      }

    </nav>

  );

}

export default Navbar;