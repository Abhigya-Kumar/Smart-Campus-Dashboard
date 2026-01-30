import { useState } from "react";
import { Clock, MapPin } from "lucide-react";

const TimetableWidget = ({ widget }) => {
  const timetable = widget.data || {
    Mon: [
      { subject: "Math", time: "09:00 - 10:00", room: "Room 201" },
      { subject: "Physics", time: "10:15 - 11:15", room: "Lab 3" },
    ],
    Tue: [
      { subject: "CS", time: "09:00 - 10:00", room: "Room 105" },
      { subject: "English", time: "11:30 - 12:30", room: "Room 302" },
    ],
    Wed: [
      { subject: "Math", time: "10:15 - 11:15", room: "Room 201" },
    ],
    Thu: [
      { subject: "Physics", time: "09:00 - 10:00", room: "Lab 1" },
      { subject: "CS", time: "10:15 - 11:15", room: "Room 105" },
    ],
    Fri: [
      { subject: "English", time: "09:00 - 10:00", room: "Room 302" },
      { subject: "Sports", time: "11:30 - 12:30", room: "Ground" },
    ],
  };

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const [activeDay, setActiveDay] = useState("Mon");

  const enabledSubjects = widget.config?.subjects || [];

  const classes =
    timetable[activeDay]?.filter(
      (cls) =>
        enabledSubjects.length === 0 ||
        enabledSubjects.includes(cls.subject)
    ) || [];

  return (
    <div className="flex flex-col gap-4">
      {/* Day Pills */}
      <div className="flex gap-2">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition ${
              activeDay === day
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Classes */}
      <div className="flex flex-col gap-3">
        {classes.length === 0 ? (
          <div className="text-sm text-gray-500 text-center">
            No classes scheduled
          </div>
        ) : (
          classes.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition"
            >
              <div className="font-medium text-gray-900">
                {item.subject}
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  {item.time}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  {item.room}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TimetableWidget;
