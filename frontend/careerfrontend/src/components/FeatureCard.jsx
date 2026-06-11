import React from "react";

function FeatureCard({ icon, title, description }) {
  return (
    <div className="group flex flex-col items-center justify-center p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-purple-300 dark:hover:border-purple-800/40 transition-all duration-300 text-center h-full">
      <div className="w-16 h-16 mb-5 flex items-center justify-center rounded-full bg-purple-50 dark:bg-purple-900/20 text-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;