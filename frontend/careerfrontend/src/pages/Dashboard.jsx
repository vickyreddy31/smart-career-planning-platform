import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-8 text-left">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-2xl shadow-lg mb-8">
            <h2 className="text-3xl font-extrabold mb-2">Welcome Back, joe 👋</h2>
            <p className="text-purple-100 font-medium">Track your career growth and profile progress.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <h4 className="text-sm font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2">📄 Resume Status</h4>
              <p className="text-3xl font-extrabold text-slate-800 dark:text-white">Uploaded</p>
            </div>
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <h4 className="text-sm font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2">🎯 Career Goals</h4>
              <p className="text-3xl font-extrabold text-slate-800 dark:text-white">3 Active</p>
            </div>
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <h4 className="text-sm font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2">📈 Profile Score</h4>
              <p className="text-3xl font-extrabold text-slate-800 dark:text-white">85%</p>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Quick Actions</h3>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 font-semibold text-sm rounded-xl text-white bg-purple-600 hover:bg-purple-500 shadow-md shadow-purple-600/20 hover:shadow-purple-600/40 transition">
              Update Profile
            </button>
            <button className="px-6 py-3 font-semibold text-sm rounded-xl text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition">
              Upload Resume
            </button>
            <button className="px-6 py-3 font-semibold text-sm rounded-xl text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition">
              View Opportunities
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;