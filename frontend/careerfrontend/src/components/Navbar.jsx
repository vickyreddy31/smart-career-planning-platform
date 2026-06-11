import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-white">
      <Link to="/dashboard" className="text-xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent hover:opacity-90 transition">
        🎯 Smart Career
      </Link>
      <div className="flex items-center gap-4">
        <Link to="/profile" className="px-4 py-2 text-sm font-semibold rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 transition">
          Profile
        </Link>
        <button onClick={handleLogout} className="px-4 py-2 text-sm font-semibold rounded-xl bg-red-600 hover:bg-red-500 transition">
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;