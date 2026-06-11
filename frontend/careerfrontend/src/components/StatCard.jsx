import React from "react";

function StatCard({ number, title }) {
  return (
    <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-purple-300 dark:hover:border-purple-800/40 transition-all duration-300 text-center">
      <h2 className="text-4xl font-extrabold text-purple-600 dark:text-purple-400 mb-2">
        {number}
      </h2>
      <p className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">
        {title}
      </p>
    </div>
  );
}

export default StatCard;