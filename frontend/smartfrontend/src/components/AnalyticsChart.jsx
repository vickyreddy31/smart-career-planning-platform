import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function AnalyticsChart() {

  const data = [
    { skill: "Python", score: 95 },
    { skill: "Django", score: 90 },
    { skill: "React", score: 75 },
    { skill: "SQL", score: 85 }
  ];

  return (
    <div
      style={{
        background:"white",
        padding:"20px",
        borderRadius:"15px",
        marginTop:"20px"
      }}
    >
      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <BarChart data={data}>
          <XAxis dataKey="skill" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="score" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AnalyticsChart;