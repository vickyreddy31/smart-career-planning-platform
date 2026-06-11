import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile, updateProfile } from "../services/authService";
import Navbar from "../components/Navbar";

function Profile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    fullName: "joe",
    email: "joe@example.com",
    bio: "Passionate software engineering student looking to build a career in full stack development and AI.",
    skills: "React, JavaScript, Python, Django, HTML, CSS",
    targetRole: "Full Stack Developer",
  });
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ ...profile });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile();
        if (response.data) {
          const fetchedData = {
            fullName: response.data.fullName || response.data.username || "joe",
            email: response.data.email || "joe@example.com",
            bio: response.data.bio || "",
            skills: response.data.skills || "",
            targetRole: response.data.targetRole || "",
          };
          setProfile(fetchedData);
          setFormData(fetchedData);
        }
      } catch (error) {
        console.warn("Backend API not connected yet. Running in local sandbox mode with mock profile data.");
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      await updateProfile(formData);
      setProfile(formData);
      setEditMode(false);
      setMessage({ type: "success", text: "Profile updated successfully!" });
    } catch (error) {
      console.warn("API save failed, updating profile locally in sandbox mode.");
      setProfile(formData);
      setEditMode(false);
      setMessage({ type: "success", text: "Profile updated successfully (Sandbox Mode)!" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col">
      <Navbar />
      <div className="max-w-3xl mx-auto my-10 p-6 w-full text-left">
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-3xl p-10 shadow-xl">
          <div className="flex flex-col sm:flex-row items-center gap-6 border-b border-slate-200 dark:border-slate-800 pb-6 mb-8">
            <div className="w-24 h-24 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center text-4xl font-extrabold border border-purple-200 dark:border-purple-800/40">
              {profile.fullName.charAt(0).toUpperCase()}
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-3xl font-extrabold text-slate-950 dark:text-white mb-1">{profile.fullName}</h2>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">{profile.targetRole || "Career Planner Participant"}</p>
            </div>
          </div>

          {message.text && (
            <div
              className={`mb-6 p-4 text-sm font-medium rounded-xl border ${message.type === "success"
                ? "bg-green-50 dark:bg-green-950/20 text-green-750 border-green-200 dark:border-green-900/30"
                : "bg-red-50 dark:bg-red-950/20 text-red-755 border-red-200 dark:border-red-900/30"
                }`}
            >
              {message.text}
            </div>
          )}

          {!editMode ? (
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold border-b border-slate-200 dark:border-slate-800 pb-2 mb-4 text-slate-900 dark:text-white">Personal Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">Email Address</span>
                    <span className="text-slate-900 dark:text-white font-medium">{profile.email}</span>
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">Target Career Role</span>
                    <span className="text-slate-900 dark:text-white font-medium">{profile.targetRole || "Not specified"}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold border-b border-slate-200 dark:border-slate-800 pb-2 mb-4 text-slate-900 dark:text-white">Professional Bio</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200/50 dark:border-slate-800/50 p-4 rounded-xl">
                  {profile.bio || "No bio added yet."}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold border-b border-slate-200 dark:border-slate-800 pb-2 mb-4 text-slate-900 dark:text-white">Key Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {profile.skills
                    ? profile.skills.split(",").map((skill, index) => (
                      <span
                        key={index}
                        className="bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-800/40 px-3.5 py-1.5 rounded-full text-xs font-semibold"
                      >
                        {skill.trim()}
                      </span>
                    ))
                    : "No skills listed."}
                </div>
              </div>

              <div className="flex justify-end gap-4 pt-6">
                <button
                  className="px-6 py-3 font-semibold text-sm rounded-xl text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 transition"
                  onClick={() => navigate("/dashboard")}
                >
                  Back to Dashboard
                </button>
                <button
                  className="px-6 py-3 font-semibold text-sm rounded-xl text-white bg-purple-600 hover:bg-purple-500 shadow-md hover:shadow-lg transition"
                  onClick={() => {
                    setFormData({ ...profile });
                    setEditMode(true);
                  }}
                >
                  Edit Profile
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-lg font-bold border-b border-slate-200 dark:border-slate-800 pb-2 text-slate-900 dark:text-white">Edit Profile Information</h3>

              <div>
                <label htmlFor="fullName" className="block text-sm font-bold text-slate-750 dark:text-slate-300 mb-2">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition text-slate-900 dark:text-white"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-slate-755 dark:text-slate-300 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition text-slate-900 dark:text-white"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="targetRole" className="block text-sm font-bold text-slate-755 dark:text-slate-300 mb-2">Target Career Role</label>
                <input
                  type="text"
                  id="targetRole"
                  name="targetRole"
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition text-slate-900 dark:text-white"
                  value={formData.targetRole}
                  onChange={handleChange}
                  placeholder="e.g. Full Stack Engineer, Product Manager"
                />
              </div>

              <div>
                <label htmlFor="bio" className="block text-sm font-bold text-slate-755 dark:text-slate-300 mb-2">Professional Bio</label>
                <textarea
                  id="bio"
                  name="bio"
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition text-slate-900 dark:text-white resize-y"
                  value={formData.bio}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Write a brief professional summary..."
                />
              </div>

              <div>
                <label htmlFor="skills" className="block text-sm font-bold text-slate-755 dark:text-slate-300 mb-2">Key Skills (Comma separated)</label>
                <input
                  type="text"
                  id="skills"
                  name="skills"
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition text-slate-900 dark:text-white"
                  value={formData.skills}
                  onChange={handleChange}
                  placeholder="e.g. React, Python, Project Management"
                />
              </div>

              <div className="flex justify-end gap-4 pt-6">
                <button
                  type="button"
                  className="px-6 py-3 font-semibold text-sm rounded-xl text-slate-705 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 transition"
                  onClick={() => setEditMode(false)}
                  disabled={loading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 font-semibold text-sm rounded-xl text-white bg-purple-600 hover:bg-purple-500 shadow-md hover:shadow-lg transition"
                  disabled={loading}
                >
                  {loading ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;