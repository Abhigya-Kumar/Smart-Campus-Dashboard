import { useState } from "react";
import { LayoutGrid, Plus } from "lucide-react";

import {
  DndContext,
  closestCenter,
} from "@dnd-kit/core";

import {
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";

import { useDashboard } from "../../context/DashboardContext";
import WidgetContainer from "./WidgetContainer";
import AddWidgetModal from "./AddWidgetModal";

const Dashboard = () => {
  const { widgets, reorderWidgets } = useDashboard();
  const [showAddModal, setShowAddModal] = useState(false);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const oldIndex = widgets.findIndex(w => w.id === active.id);
    const newIndex = widgets.findIndex(w => w.id === over.id);

    reorderWidgets(oldIndex, newIndex);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-8 py-6">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-blue-100 text-blue-600">
            <LayoutGrid size={22} />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              Smart Campus Dashboard
            </h1>
            <p className="text-sm text-gray-500">
              Track academics, schedules, and campus updates
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
        >
          <Plus size={16} />
          Add Widget
        </button>
      </div>

      {/* Drag & Drop Grid */}
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={widgets.map(w => w.id)}
          strategy={rectSortingStrategy}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {widgets.map((widget, index) => (
              <WidgetContainer
                key={widget.id}
                widget={widget}
                index={index}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>

      {showAddModal && (
        <AddWidgetModal onClose={() => setShowAddModal(false)} />
      )}
    </div>
  );
};

export default Dashboard;
