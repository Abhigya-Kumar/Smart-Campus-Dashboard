const SubjectPerformanceWidget = ({ widget }) => {
  const data = widget.data || [
    { subject: "Math", percentage: 85 },
    { subject: "Physics", percentage: 72 },
    { subject: "CS", percentage: 91 },
  ];

  const subject = widget.config?.subject || "All";
  const displayMode = widget.config?.displayMode || "percentage";

  const visible =
    subject === "All"
      ? data
      : data.filter(d => d.subject === subject);

  return (
    <div className="flex flex-col gap-3">
      {visible.map(item => (
        <div
          key={item.subject}
          className="flex justify-between"
        >
          <span>{item.subject}</span>
          <span className="font-medium">
            {displayMode === "grade"
              ? item.percentage >= 85 ? "A" : item.percentage >= 70 ? "B" : "C"
              : `${item.percentage}%`}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SubjectPerformanceWidget;
