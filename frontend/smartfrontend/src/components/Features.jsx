import {
  FaFileUpload,
  FaBriefcase,
  FaChartLine
} from "react-icons/fa";

function Features(){

  return(

    <div className="container py-5">

      <div className="row">

        <div className="col-md-4">

          <div className="card feature-card shadow p-4">

            <FaFileUpload size={40}/>

            <h4 className="mt-3">
              Resume Upload
            </h4>

            <p>
              Upload resumes securely.
            </p>

          </div>

        </div>

        <div className="col-md-4">

          <div className="card feature-card shadow p-4">

            <FaChartLine size={40}/>

            <h4 className="mt-3">
              Career Analysis
            </h4>

            <p>
              Find best career paths.
            </p>

          </div>

        </div>

        <div className="col-md-4">

          <div className="card feature-card shadow p-4">

            <FaBriefcase size={40}/>

            <h4 className="mt-3">
              Job Matching
            </h4>

            <p>
              Discover matching jobs.
            </p>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Features;