import { CalendarDays } from "lucide-react";

const ExamCountdownWidget = ({ widget }) => {
  const examDate = widget.config?.date;

  if (!examDate) {
    return (
      <div className="text-sm text-gray-500">
        No exam date selected
      </div>
    );
  }

  const today = new Date();
  const exam = new Date(examDate);
  const diffTime = exam - today;
  const daysLeft = Math.ceil(
    diffTime / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="flex items-center gap-4">
      <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
        <CalendarDays size={20} />
      </div>

      <div>
        <p className="text-sm text-gray-500">
          Days left
        </p>
        <p className="text-2xl font-semibold text-gray-900">
          {daysLeft >= 0 ? daysLeft : "Exam passed"}
        </p>
      </div>
    </div>
  );
};

export default ExamCountdownWidget;
