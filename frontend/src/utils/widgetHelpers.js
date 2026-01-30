import { v4 as uuid } from "uuid";

/*  Widget Types */
export const WIDGET_TYPES = {
  ATTENDANCE: "ATTENDANCE",
  STUDY_CHART: "STUDY_CHART",
  ASSIGNMENTS: "ASSIGNMENTS",
  TIMETABLE: "TIMETABLE",
  EXAM_COUNTDOWN: "EXAM_COUNTDOWN",
  ANNOUNCEMENTS: "ANNOUNCEMENTS",
  FEE_STATUS: "FEE_STATUS",
  SUBJECT_PERFORMANCE: "SUBJECT_PERFORMANCE",
};

/* Default Titles */
export const DEFAULT_TITLES = {
  ATTENDANCE: "Attendance",
  STUDY_CHART: "Study Hours",
  ASSIGNMENTS: "Assignment Tracker",
  TIMETABLE: "Timetable",
  EXAM_COUNTDOWN: "Exam Countdown",
  ANNOUNCEMENTS: "Campus Announcements",
  FEE_STATUS: "Fee Status",
  SUBJECT_PERFORMANCE: "Subject Performance",
};

/* DEFAULT CONFIG PER WIDGET  */
export const DEFAULT_CONFIG = {
  ATTENDANCE: {
    subject: "All",
    warningThreshold: 75,
  },

  STUDY_CHART: {
    range: "weekly",
  },

  ASSIGNMENTS: {
    sortBy: "date",
  },

  TIMETABLE: {
    subjects: ["Math", "Physics", "CS"],
  },

  EXAM_COUNTDOWN: {
    date: "",
  },

  ANNOUNCEMENTS: {
    category: "All",
    maxItems: 5,
  },

  FEE_STATUS: {
    showOnlyPending: false,
    currency: "₹",
  },

  SUBJECT_PERFORMANCE: {
    subject: "All",
    displayMode: "percentage",
  },
};

/* DEFAULT DATA (OPTIONAL) */
export const DEFAULT_DATA = {
  ATTENDANCE: { percentage: 72 },

  EXAM_COUNTDOWN: {
    date: "",
  },
};

/* Widget Factory */
export const createWidget = (type) => {
  return {
    id: uuid(),
    type,
    title: DEFAULT_TITLES[type],
    config: DEFAULT_CONFIG[type] || {},
    data: DEFAULT_DATA[type] || null,
  };
};

/* Move Widget Helper */
export const moveWidget = (widgets, index, direction) => {
  const newWidgets = [...widgets];
  const targetIndex =
    direction === "up" ? index - 1 : index + 1;

  if (
    targetIndex < 0 ||
    targetIndex >= newWidgets.length
  ) {
    return widgets;
  }

  [newWidgets[index], newWidgets[targetIndex]] = [
    newWidgets[targetIndex],
    newWidgets[index],
  ];

  return newWidgets;
};
