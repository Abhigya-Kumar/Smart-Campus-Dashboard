import { useState } from "react";
import { X } from "lucide-react";
import { useDashboard } from "../../context/DashboardContext";

const WidgetConfigModal = ({ widget, onClose }) => {
  const { updateWidget } = useDashboard();

  const [title, setTitle] = useState(widget.title);
  const [config, setConfig] = useState(widget.config || {});

  const saveChanges = () => {
    updateWidget(widget.id, {
      title,
      config,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Configure Widget
          </h2>
          <button
            onClick={onClose}
            className="p-1 rounded-md hover:bg-gray-100"
          >
            <X size={18} />
          </button>
        </div>

        {/* Widget Title */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Widget Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
          />
        </div>

        {/* Widget-Specific Settings */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-800 mb-3">
            Widget Settings
          </h3>

          <WidgetSettings
            widget={widget}
            config={config}
            setConfig={setConfig}
          />
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-sm border border-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={saveChanges}
            className="px-4 py-2 rounded-lg text-sm bg-blue-600 text-white hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default WidgetConfigModal;



const WidgetSettings = ({ widget, config, setConfig }) => {
  switch (widget.type) {
    case "STUDY_CHART":
      return (
        <SelectField
          label="Range"
          value={config.range || "weekly"}
          options={[
            { label: "Weekly", value: "weekly" },
            { label: "Monthly", value: "monthly" },
          ]}
          onChange={(value) =>
            setConfig({ ...config, range: value })
          }
        />
      );

    case "TIMETABLE":
      return (
        <MultiSelectField
          label="Visible Subjects"
          values={config.subjects || []}
          options={[
            "Math",
            "Physics",
            "CS",
            "English",
            "Electronics",
          ]}
          onChange={(values) =>
            setConfig({ ...config, subjects: values })
          }
        />
      );

    case "EXAM_COUNTDOWN":
      return (
        <DateField
          label="Exam Date"
          value={config.date || ""}
          onChange={(value) =>
            setConfig({ ...config, date: value })
          }
        />
      );

    case "ATTENDANCE":
      return (
        <SelectField
          label="Subject"
          value={config.subject || "All"}
          options={[
            { label: "All Subjects", value: "All" },
            { label: "Math", value: "Math" },
            { label: "Physics", value: "Physics" },
            { label: "CS", value: "CS" },
          ]}
          onChange={(value) =>
            setConfig({ ...config, subject: value })
          }
        />
      );
      case "ANNOUNCEMENTS":
  return (
    <>
      <SelectField
        label="Category"
        value={config.category || "All"}
        options={[
          { label: "All", value: "All" },
          { label: "Exam", value: "Exam" },
          { label: "Event", value: "Event" },
          { label: "Notice", value: "Notice" },
        ]}
        onChange={(value) =>
          setConfig({ ...config, category: value })
        }
      />

      <SelectField
        label="Max Announcements"
        value={config.maxItems || 5}
        options={[
          { label: "3", value: 3 },
          { label: "5", value: 5 },
          { label: "10", value: 10 },
        ]}
        onChange={(value) =>
          setConfig({
            ...config,
            maxItems: Number(value),
          })
        }
      />
    </>
  );

  case "FEE_STATUS":
  return (
    <>
      <SelectField
        label="Show Only Pending Dues"
        value={config.showOnlyPending ? "yes" : "no"}
        options={[
          { label: "No", value: "no" },
          { label: "Yes", value: "yes" },
        ]}
        onChange={(value) =>
          setConfig({
            ...config,
            showOnlyPending: value === "yes",
          })
        }
      />

      <SelectField
        label="Currency"
        value={config.currency || "₹"}
        options={[
          { label: "₹ (INR)", value: "₹" },
          { label: "$ (USD)", value: "$" },
          { label: "€ (EUR)", value: "€" },
        ]}
        onChange={(value) =>
          setConfig({
            ...config,
            currency: value,
          })
        }
      />
    </>
  );

  case "SUBJECT_PERFORMANCE":
  return (
    <>
      <SelectField
        label="Subject"
        value={config.subject || "All"}
        options={[
          { label: "All Subjects", value: "All" },
          { label: "Math", value: "Math" },
          { label: "Physics", value: "Physics" },
          { label: "CS", value: "CS" },
        ]}
        onChange={(value) =>
          setConfig({
            ...config,
            subject: value,
          })
        }
      />

      <SelectField
        label="Display Mode"
        value={config.displayMode || "percentage"}
        options={[
          { label: "Percentage", value: "percentage" },
          { label: "Grade", value: "grade" },
        ]}
        onChange={(value) =>
          setConfig({
            ...config,
            displayMode: value,
          })
        }
      />
    </>
  );


    default:
      return (
        <div className="text-sm text-gray-500">
          No configurable options for this widget.
        </div>
      );
  }
};



const SelectField = ({ label, value, options, onChange }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);

const DateField = ({ label, value, onChange }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      type="date"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
    />
  </div>
);

const MultiSelectField = ({ label, options, values, onChange }) => {
  const toggleValue = (val) => {
    if (values.includes(val)) {
      onChange(values.filter(v => v !== val));
    } else {
      onChange([...values, val]);
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => toggleValue(opt)}
            className={`px-3 py-1 rounded-full text-sm border transition ${
              values.includes(opt)
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-gray-100 text-gray-700 border-gray-300"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};
