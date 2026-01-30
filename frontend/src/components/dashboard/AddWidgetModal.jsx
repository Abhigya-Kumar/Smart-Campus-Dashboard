import { X, PlusSquare } from "lucide-react";
import { useDashboard } from "../../context/DashboardContext";
import { WIDGET_TYPES, DEFAULT_TITLES } from "../../utils/widgetHelpers";

const AddWidgetModal = ({ onClose }) => {
  const { addWidget } = useDashboard();

  const widgetList = Object.values(WIDGET_TYPES);

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-semibold text-gray-900">
            Add a Widget
          </h2>
          <button
            onClick={onClose}
            className="p-1 rounded-md hover:bg-gray-100 text-gray-500"
          >
            <X size={18} />
          </button>
        </div>

        {/* Widget List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {widgetList.map((type) => (
            <button
              key={type}
              onClick={() => {
                addWidget(type);
                onClose();
              }}
              className="border border-gray-200 rounded-lg p-4 text-left hover:bg-gray-50 transition flex items-center gap-3"
            >
              <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                <PlusSquare size={16} />
              </div>

              <div>
                <div className="font-medium text-gray-900">
                  {DEFAULT_TITLES[type]}
                </div>
                <div className="text-xs text-gray-500">
                  Add {DEFAULT_TITLES[type]} widget
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddWidgetModal;

