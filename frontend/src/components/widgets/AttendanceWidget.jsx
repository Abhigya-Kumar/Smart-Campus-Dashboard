import { AlertTriangle } from "lucide-react";

const AttendanceWidget = ({ widget }) => {
  // Mock subject-wise attendance data
  const attendanceData =
    widget.data?.subjects || {
      Math: 82,
      Physics: 68,
      CS: 91,
      English: 75,
    };

  const subject = widget.config?.subject || "All";
  const threshold = widget.config?.warningThreshold || 75;

  // Calculate percentage based on selected subject
  let percentage;

  if (subject === "All") {
    const values = Object.values(attendanceData);
    percentage = Math.round(
      values.reduce((a, b) => a + b, 0) / values.length
    );
  } else {
    percentage = attendanceData[subject];
  }

  const isLow = percentage < threshold;

  return (
    <div className="flex flex-col gap-2">
      <div className="text-sm text-gray-600">
        Subject:{" "}
        <span className="font-medium">
          {subject === "All" ? "All Subjects" : subject}
        </span>
      </div>

      <div
        className={`text-3xl font-semibold ${
          isLow ? "text-red-600" : "text-green-600"
        }`}
      >
        {percentage}%
      </div>

      {isLow && (
        <div className="flex items-center gap-1 text-sm text-red-600">
          <AlertTriangle size={14} />
          Attendance below {threshold}%
        </div>
      )}
    </div>
  );
};

export default AttendanceWidget;
