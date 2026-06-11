import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 mt-16 pt-16 pb-8 text-left w-full">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            🎯 Smart Career
          </h3>
          <p className="text-sm leading-relaxed">
            Helping students and job seekers discover the right career path, improve skills, and achieve their professional goals.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/login" className="hover:text-white transition">Login</Link></li>
            <li><Link to="/register" className="hover:text-white transition">Register</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Features</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition cursor-default">Resume Management</li>
            <li className="hover:text-white transition cursor-default">Career Suggestions</li>
            <li className="hover:text-white transition cursor-default">Skill Gap Analysis</li>
            <li className="hover:text-white transition cursor-default">Job Matching</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>📧 support@smartcareer.com</li>
            <li>📞 +91 9876543210</li>
            <li>📍 Hyderabad, India</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 text-center text-xs">
        <p>© {new Date().getFullYear()} Smart Career Planning Platform. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;