import { CalendarDays } from "lucide-react";

const AssignmentWidget = ({ widget }) => {
  // Fallback mock assignments
  const assignments = widget.data || [
    {
      id: 1,
      subject: "Math",
      title: "Algebra Worksheet",
      dueDate: "2026-02-02",
      priority: "High",
    },
    {
      id: 2,
      subject: "Physics",
      title: "Numerical Problems",
      dueDate: "2026-02-01",
      priority: "Medium",
    },
    {
      id: 3,
      subject: "CS",
      title: "React Mini Project",
      dueDate: "2026-02-05",
      priority: "Low",
    },
  ];

  const { sortBy = "date" } = widget.config || {};

  const sortedAssignments = [...assignments].sort((a, b) => {
    if (sortBy === "subject") {
      return a.subject.localeCompare(b.subject);
    }
    return new Date(a.dueDate) - new Date(b.dueDate);
  });

  const priorityStyles = {
    High: "bg-red-100 text-red-600",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-green-100 text-green-600",
  };

  return (
    <div className="flex flex-col gap-3">
      {sortedAssignments.map((item) => (
        <div
          key={item.id}
          className="border border-gray-200 rounded-lg p-4 flex items-center justify-between hover:bg-gray-50 transition"
        >
          {/* Left */}
          <div className="flex flex-col gap-1">
            <p className="font-medium text-gray-900">
              {item.title}
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>{item.subject}</span>
              <span className="w-1 h-1 bg-gray-400 rounded-full" />
              <div className="flex items-center gap-1">
                <CalendarDays size={14} />
                <span>{item.dueDate}</span>
              </div>
            </div>
          </div>

          {/* Right */}
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${priorityStyles[item.priority]}`}
          >
            {item.priority}
          </span>
        </div>
      ))}

      {sortedAssignments.length === 0 && (
        <div className="text-sm text-gray-500 text-center">
          No assignments available
        </div>
      )}
    </div>
  );
};

export default AssignmentWidget;
