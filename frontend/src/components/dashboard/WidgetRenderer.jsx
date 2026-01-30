import AttendanceWidget from "../widgets/AttendanceWidget";
import AssignmentWidget from "../widgets/AssignmentWidget";
import TimetableWidget from "../widgets/TimetableWidget";
import StudyChartWidget from "../widgets/StudyChartWidget";
import ExamCountdownWidget from "../widgets/ExamCountdownWidget";
import AnnouncementWidget from "../widgets/AnnouncementWidget";
import FeeStatusWidget from "../widgets/FeeStatusWidget";
import SubjectPerformanceWidget from "../widgets/SubjectPerformanceWidget";

const WidgetRenderer = ({ widget }) => {
  switch (widget.type) {
    case "ATTENDANCE":
      return <AttendanceWidget widget={widget} />;

    case "ASSIGNMENTS":
      return <AssignmentWidget widget={widget} />;

    case "TIMETABLE":
      return <TimetableWidget widget={widget} />;

    case "STUDY_CHART":
      return <StudyChartWidget widget={widget} />;

    case "EXAM_COUNTDOWN":
      return <ExamCountdownWidget widget={widget} />;

    case "ANNOUNCEMENTS":
      return <AnnouncementWidget widget={widget} />;

    case "FEE_STATUS":
      return <FeeStatusWidget widget={widget} />;

    case "SUBJECT_PERFORMANCE":
      return <SubjectPerformanceWidget widget={widget} />;

    default:
      return (
        <div className="text-sm text-gray-500">
          Unknown widget type
        </div>
      );
  }
};

export default WidgetRenderer;
