import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 text-slate-300 flex flex-col h-screen p-6 shrink-0 text-left">
      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-6">Menu</h4>
      <ul className="space-y-2">
        <li>
          <NavLink 
            to="/dashboard" 
            className={({ isActive }) => 
              `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition ${
                isActive 
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-900/30" 
                  : "hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            <span>📊</span> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/profile" 
            className={({ isActive }) => 
              `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition ${
                isActive 
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-900/30" 
                  : "hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            <span>👤</span> Profile
          </NavLink>
        </li>
        <li>
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-slate-500 cursor-not-allowed hover:bg-slate-800/40">
            <span>📄</span> Resume
          </div>
        </li>
        <li>
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-slate-500 cursor-not-allowed hover:bg-slate-800/40">
            <span>💼</span> Jobs
          </div>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;