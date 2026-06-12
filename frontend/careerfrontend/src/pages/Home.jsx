import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import FeatureCard from "../components/FeatureCard";
import StatCard from "../components/StatCard";
import Footer from "../components/Footer";

function HomeNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 w-full bg-slate-900 border-b border-slate-800 transition-shadow duration-300 ${scrolled ? "shadow-xl shadow-black/20" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Brand */}
          <Link to="/" className="flex items-center gap-2 text-xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent hover:opacity-90 transition">
            <span className="text-2xl">🎯</span>
            <span>Smart Career</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#features" className="text-sm font-semibold text-slate-400 hover:text-white transition px-3 py-2 rounded-xl hover:bg-slate-800">
              Features
            </a>
            <a href="#stats" className="text-sm font-semibold text-slate-400 hover:text-white transition px-3 py-2 rounded-xl hover:bg-slate-800">
              Stats
            </a>
            <Link to="/login" className="text-sm font-semibold text-slate-300 hover:text-white px-4 py-2 rounded-xl border border-slate-700 hover:bg-slate-800 transition">
              Login
            </Link>
            <Link to="/register" className="text-sm font-semibold text-white px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 shadow-md shadow-purple-900/30 hover:-translate-y-0.5 transition-all">
              Get Started
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-4 pb-4 pt-2 space-y-2 border-t border-slate-800 bg-slate-900">
          <a href="#features" onClick={() => setMenuOpen(false)} className="block text-sm font-semibold text-slate-400 hover:text-white px-4 py-2.5 rounded-xl hover:bg-slate-800 transition">Features</a>
          <a href="#stats" onClick={() => setMenuOpen(false)} className="block text-sm font-semibold text-slate-400 hover:text-white px-4 py-2.5 rounded-xl hover:bg-slate-800 transition">Stats</a>
          <Link to="/login" className="block text-sm font-semibold text-slate-300 px-4 py-2.5 rounded-xl border border-slate-700 hover:bg-slate-800 text-center transition">Login</Link>
          <Link to="/register" className="block text-sm font-semibold text-white px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-center transition">Get Started</Link>
        </div>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HomeNavbar />

      <HeroSection />

      {/* Features Section */}
      <main className="flex-grow max-w-7xl mx-auto px-6 py-16 w-full">
        <div id="features" className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border border-purple-200 dark:border-purple-800/40">
            Everything You Need
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-3">
            Powerful Career Tools
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Our platform gives you all the tools to plan, build, and launch your career with confidence.
          </p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          <FeatureCard icon="📄" title="Resume Management"    description="Upload and manage resumes efficiently with AI-powered feedback." />
          <FeatureCard icon="🎯" title="Career Suggestions"  description="Discover suitable career paths based on your skills and interests." />
          <FeatureCard icon="📈" title="Skill Gap Analysis"  description="Identify skills required for your next career growth milestone." />
          <FeatureCard icon="💼" title="Job Matching"        description="Get matched with real job openings tailored to your profile." />
          <FeatureCard icon="🧠" title="AI Career Coach"     description="Personalised guidance powered by AI to help you reach your goals." />
          <FeatureCard icon="📊" title="Progress Tracking"   description="Visualise and track your career progress over time." />
        </section>

        {/* Stats Section */}
        <div id="stats" className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-3">
            Trusted by Thousands
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm">Join a growing community of students and professionals.</p>
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-24">
          <StatCard number="1,000+" title="Students Enrolled" />
          <StatCard number="500+"   title="Career Paths"      />
          <StatCard number="95%"    title="Success Rate"      />
        </section>

        {/* CTA Banner */}
        <section className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-10 text-center text-white shadow-xl shadow-purple-900/20">
          <h2 className="text-3xl font-extrabold mb-3">Ready to build your future?</h2>
          <p className="text-purple-100 mb-8 text-sm">Join thousands of students who have already started their career journey.</p>
          <Link to="/register" className="inline-block px-8 py-3.5 bg-white text-purple-700 font-bold rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
            Get Started for Free →
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;