import Navbar from "../components/Navbar";
import heroImage from "../assets/profile.png";

function LandingPage() {
  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg,#0f172a,#1e293b,#312e81)",
          position: "relative",
          overflow: "hidden"
        }}
      >

        {/* Glow Effect */}

        <div
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            background: "#8b5cf6",
            borderRadius: "50%",
            filter: "blur(150px)",
            opacity: 0.3,
            top: "-150px",
            left: "-100px"
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "350px",
            height: "350px",
            background: "#06b6d4",
            borderRadius: "50%",
            filter: "blur(150px)",
            opacity: 0.25,
            bottom: "-100px",
            right: "-100px"
          }}
        />

        {/* Hero Section */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "80px 8%",
            flexWrap: "wrap",
            minHeight: "90vh",
            position: "relative",
            zIndex: 2
          }}
        >

          {/* Left */}

          <div
            style={{
              maxWidth: "650px"
            }}
          >

            <div
              style={{
                display: "inline-block",
                padding: "10px 20px",
                background:
                  "rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
                borderRadius: "30px",
                color: "#c4b5fd",
                marginBottom: "25px"
              }}
            >
              🚀 AI Powered Career Guidance
            </div>

            <h1
              style={{
                fontSize: "75px",
                fontWeight: "800",
                color: "white",
                lineHeight: "1.1",
                marginBottom: "20px"
              }}
            >
              Build Your
              <br />

              Dream Career

              <br />

              <span
                style={{
                  background:
                    "linear-gradient(90deg,#8b5cf6,#ec4899)",
                  WebkitBackgroundClip:
                    "text",
                  WebkitTextFillColor:
                    "transparent"
                }}
              >
                With AI
              </span>
            </h1>

            <p
              style={{
                color: "#cbd5e1",
                fontSize: "20px",
                lineHeight: "1.8"
              }}
            >
              Upload your resume and discover
              career recommendations,
              skill-gap analysis,
              personalized roadmaps and
              AI-powered job opportunities.
            </p>

            <div
              style={{
                marginTop: "35px"
              }}
            >

              <button
                style={{
                  background:
                    "linear-gradient(90deg,#8b5cf6,#6366f1)",
                  border: "none",
                  color: "white",
                  padding: "16px 35px",
                  borderRadius: "15px",
                  cursor: "pointer",
                  fontSize: "18px",
                  marginRight: "15px"
                }}
              >
                Get Started
              </button>

              <button
                style={{
                  background: "transparent",
                  border:
                    "2px solid white",
                  color: "white",
                  padding: "16px 35px",
                  borderRadius: "15px",
                  cursor: "pointer",
                  fontSize: "18px"
                }}
              >
                Upload Resume
              </button>

            </div>

          </div>

          {/* Right Image */}

          <div>

            <img
              src={heroImage}
              alt="Career"
              style={{
                width: "520px",
                maxWidth: "100%",
                borderRadius: "30px",
                boxShadow:
                  "0 25px 60px rgba(0,0,0,0.4)"
              }}
            />

          </div>

        </div>

        {/* Stats */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
            padding: "0 8% 80px"
          }}
        >

          {[
            ["100+", "Career Paths"],
            ["500+", "Jobs"],
            ["1000+", "Students"],
            ["95%", "Accuracy"]
          ].map((item, index) => (

            <div
              key={index}
              style={{
                background:
                  "rgba(255,255,255,0.08)",
                backdropFilter:
                  "blur(15px)",
                border:
                  "1px solid rgba(255,255,255,0.1)",
                borderRadius: "25px",
                padding: "30px",
                textAlign: "center",
                color: "white"
              }}
            >
              <h1
                style={{
                  color: "#8b5cf6",
                  fontSize: "45px"
                }}
              >
                {item[0]}
              </h1>

              <p>{item[1]}</p>

            </div>

          ))}

        </div>

        {/* Features */}

        <div
          style={{
            padding: "80px 8%"
          }}
        >

          <h2
            style={{
              textAlign: "center",
              color: "white",
              fontSize: "45px",
              marginBottom: "50px"
            }}
          >
            Why Choose Smart Career?
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(280px,1fr))",
              gap: "25px"
            }}
          >

            {[
              "📄 Resume Analysis",
              "🎯 Career Recommendation",
              "📊 Skill Gap Analysis",
              "💼 Job Matching",
              "🛣 Career Roadmap",
              "🎓 Learning Resources"
            ].map((title, index) => (

              <div
                key={index}
                style={{
                  background:
                    "rgba(255,255,255,0.08)",
                  backdropFilter:
                    "blur(15px)",
                  border:
                    "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "20px",
                  padding: "30px",
                  color: "white"
                }}
              >

                <h3>{title}</h3>

                <p
                  style={{
                    color: "#cbd5e1",
                    marginTop: "10px",
                    lineHeight: "1.6"
                  }}
                >
                  Enhance your career journey
                  with AI-powered insights and
                  personalized guidance.
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Footer */}

        <div
          style={{
            textAlign: "center",
            padding: "40px",
            color: "#cbd5e1"
          }}
        >
          © 2026 Smart Career Guidance System
        </div>

      </div>
    </>
  );
}

export default LandingPage;