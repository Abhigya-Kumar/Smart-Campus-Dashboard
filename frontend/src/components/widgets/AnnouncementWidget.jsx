import { Megaphone } from "lucide-react";

const AnnouncementWidget = ({ widget }) => {
  const announcements = widget.data || [
    { id: 1, title: "Mid-sem exams postponed", category: "Exam", important: true },
    { id: 2, title: "Hackathon registrations open", category: "Event", important: false },
    { id: 3, title: "Library will remain closed on Sunday", category: "Notice", important: false },
    { id: 4, title: "End-sem timetable released", category: "Exam", important: true },
  ];

  const category = widget.config?.category || "All";
  const maxItems = widget.config?.maxItems || 5;

  const filtered =
    category === "All"
      ? announcements
      : announcements.filter(a => a.category === category);
const visibleAnnouncements = filtered.slice(0, maxItems);
  return (
    <div className="flex flex-col gap-3">
      {filtered.slice(0, maxItems).map(item => (
        <div
          key={item.id}
          className={`border rounded-lg p-4 flex gap-3 ${
            item.important ? "border-l-4 border-red-500" : "border-gray-200"
          }`}
        >
          <Megaphone size={18} className="text-gray-400" />
          <div>
            <p className="font-medium text-gray-900">
              {item.title}
            </p>
            <p className="text-xs text-gray-500">
              {item.category}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnnouncementWidget;
