import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useDashboard } from "../../context/DashboardContext";

const StudyChartWidget = ({ widget }) => {
  const { updateWidget } = useDashboard();

  // Mock data
  const weeklyData = [
    { label: "Mon", hours: 2 },
    { label: "Tue", hours: 3 },
    { label: "Wed", hours: 1 },
    { label: "Thu", hours: 4 },
    { label: "Fri", hours: 2 },
  ];

  const monthlyData = [
    { label: "Week 1", hours: 10 },
    { label: "Week 2", hours: 14 },
    { label: "Week 3", hours: 9 },
    { label: "Week 4", hours: 12 },
  ];

  const range = widget.config?.range || "weekly";
  const data = range === "monthly" ? monthlyData : weeklyData;

  const setRange = (newRange) => {
    updateWidget(widget.id, {
      config: {
        ...widget.config,
        range: newRange,
      },
    });
  };

  return (
    <div className="flex flex-col gap-4">
      
      {/* Range Selector */}
      <div className="flex items-center gap-2">
        {["weekly", "monthly"].map((option) => (
          <button
            key={option}
            onClick={() => setRange(option)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition
              ${
                range === option
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
          >
            {option === "weekly" ? "Weekly" : "Monthly"}
          </button>
        ))}
      </div>

      {/* Chart */}
      <div className="w-full h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis
              dataKey="label"
              tick={{ fontSize: 12, fill: "#6B7280" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 12, fill: "#6B7280" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              cursor={{ fill: "#F3F4F6" }}
              contentStyle={{
                borderRadius: "8px",
                border: "1px solid #E5E7EB",
                fontSize: "12px",
              }}
            />
            <Bar
              dataKey="hours"
              fill="#2563EB"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StudyChartWidget;
