import { useState } from "react";
import {
  Settings,
  ChevronUp,
  ChevronDown,
  X,
  GripVertical,
} from "lucide-react";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { useDashboard } from "../../context/DashboardContext";
import WidgetRenderer from "./WidgetRenderer";
import WidgetConfigModal from "../config/WidgetConfigModal";

const WidgetContainer = ({ widget, index }) => {
  const {
    removeWidget,
    moveWidgetUp,
    moveWidgetDown,
  } = useDashboard();

  const [showConfig, setShowConfig] = useState(false);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: widget.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <>
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition p-5 flex flex-col gap-4"
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-700">
            {widget.title}
          </h3>

          <div className="flex items-center gap-1">
            {/* Drag Handle */}
            <button
              {...listeners}
              className="p-1.5 rounded-md text-gray-500 hover:bg-gray-100 cursor-grab"
              title="Drag"
            >
              <GripVertical size={16} />
            </button>

            <IconButton onClick={() => setShowConfig(true)}>
              <Settings size={16} />
            </IconButton>

            <IconButton onClick={() => moveWidgetUp(index)}>
              <ChevronUp size={16} />
            </IconButton>

            <IconButton onClick={() => moveWidgetDown(index)}>
              <ChevronDown size={16} />
            </IconButton>

            <IconButton danger onClick={() => removeWidget(widget.id)}>
              <X size={16} />
            </IconButton>
          </div>
        </div>

        <div className="border-t border-gray-100" />

        <WidgetRenderer widget={widget} />
      </div>

      {showConfig && (
        <WidgetConfigModal
          widget={widget}
          onClose={() => setShowConfig(false)}
        />
      )}
    </>
  );
};

const IconButton = ({ children, onClick, danger }) => (
  <button
    onClick={onClick}
    className={`p-1.5 rounded-md transition ${
      danger
        ? "text-red-500 hover:bg-red-50"
        : "text-gray-600 hover:bg-gray-100"
    }`}
  >
    {children}
  </button>
);

export default WidgetContainer;
