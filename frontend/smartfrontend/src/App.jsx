import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import ResumePage from "./pages/ResumePage";
import CareerPage from "./pages/CareerPage";
import JobPage from "./pages/JobPage";
import ReportsPage from "./pages/ReportsPage";
import ApplyJobPage from "./pages/ApplyJobPage";
import JobDetailsPage from "./pages/JobDetailsPage";
import AppliedJobsPage from "./pages/AppliedJobsPage";
import ResumeScorePage from "./pages/ResumeScorePage";
import SkillGapPage from "./pages/SkillGapPage";
import AdminDashboard from "./pages/AdminDashboard";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing Page */}

        <Route
          path="/"
          element={<LandingPage />}
        />

        {/* Auth */}

        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/register"
          element={<RegisterPage />}
        />

        {/* Dashboard */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Resume */}

        <Route
          path="/resume"
          element={<ResumePage />}
        />

        {/* Careers */}

        <Route
          path="/careers"
          element={<CareerPage />}
        />

        {/* Jobs */}

        <Route
          path="/jobs"
          element={<JobPage />}
        />

        <Route
          path="/apply-job"
          element={<ApplyJobPage />}
        />

        <Route
          path="/job-details"
          element={<JobDetailsPage />}
        />

        <Route
          path="/applied-jobs"
          element={<AppliedJobsPage />}
        />

        {/* Reports */}

        <Route
          path="/reports"
          element={<ReportsPage />}
        />

        {/* Resume Score */}

        <Route
          path="/resume-score"
          element={<ResumeScorePage />}
        />

        {/* Skill Gap */}

        <Route
          path="/skill-gap"
          element={<SkillGapPage />}
        />

        {/* Admin */}

        <Route
          path="/admin"
          element={<AdminDashboard />}
        />
        <Route
  path="/"
  element={<LandingPage />}
/>

<Route
  path="/login"
  element={<LoginPage />}
/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;