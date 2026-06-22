import "./Hero.css";
import { useNavigate } from "react-router-dom";
import heroImg from "../assets/hero.png";

function Hero() {

  const navigate = useNavigate();

  return (

    <div className="hero">

      <div className="hero-left">

        <span className="badge">
          AI Powered • Personalized • Smarter
        </span>

        <h1>
          Find Careers that
          <br />
          Match Your
          <span>
            {" "}Future
          </span>
        </h1>

        <p>
          Upload your resume and get
          career recommendations,
          skill gap analysis and jobs
          tailored to your profile.
        </p>

        <div className="hero-buttons">

          <button
            onClick={() =>
              navigate("/resume")
            }
          >
            Upload Resume
          </button>

          <button
            className="secondary"
            onClick={() =>
              navigate("/careers")
            }
          >
            Explore Careers
          </button>

        </div>

      </div>

      <div className="hero-right">

        <img
          src={heroImg}
          alt=""
        />

      </div>

    </div>
  );
}

export default Hero;