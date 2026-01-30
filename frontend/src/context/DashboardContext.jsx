import { createContext, useContext, useEffect, useReducer } from "react";
import { arrayMove } from "@dnd-kit/sortable";
import { createWidget, moveWidget } from "../utils/widgetHelpers";
import {
  fetchDashboard,
  saveDashboard,
} from "../api/dashboardApi";

const DashboardContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_WIDGETS":
      return action.payload;

    case "ADD_WIDGET":
      return [...state, action.payload];

    case "REMOVE_WIDGET":
      return state.filter(w => w.id !== action.payload);

    case "UPDATE_WIDGET":
      return state.map(w =>
        w.id === action.payload.id
          ? { ...w, ...action.payload.updates }
          : w
      );

    case "MOVE_WIDGET":
      return moveWidget(state, action.payload.index, action.payload.direction);

    case "REORDER_WIDGETS":
      return action.payload;

    default:
      return state;
  }
};

export const DashboardProvider = ({ children }) => {
  const [widgets, dispatch] = useReducer(reducer, []);

  /* ---------------- LOAD FROM BACKEND ---------------- */
  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const data = await fetchDashboard();
        dispatch({ type: "SET_WIDGETS", payload: data.widgets });
      } catch (err) {
        console.error("Backend fetch failed:", err);
      }
    };
    loadDashboard();
  }, []);

  /* ---------------- SAVE TO BACKEND ---------------- */
  useEffect(() => {
    if (widgets.length === 0) return;
    saveDashboard(widgets).catch(err =>
      console.error("Backend save failed:", err)
    );
  }, [widgets]);

  /* ---------------- ACTIONS ---------------- */
  const addWidget = (type) =>
    dispatch({ type: "ADD_WIDGET", payload: createWidget(type) });

  const removeWidget = (id) =>
    dispatch({ type: "REMOVE_WIDGET", payload: id });

  const updateWidget = (id, updates) =>
    dispatch({
      type: "UPDATE_WIDGET",
      payload: { id, updates },
    });

  const moveWidgetUp = (index) =>
    dispatch({
      type: "MOVE_WIDGET",
      payload: { index, direction: "up" },
    });

  const moveWidgetDown = (index) =>
    dispatch({
      type: "MOVE_WIDGET",
      payload: { index, direction: "down" },
    });

  const reorderWidgets = (oldIndex, newIndex) =>
    dispatch({
      type: "REORDER_WIDGETS",
      payload: arrayMove(widgets, oldIndex, newIndex),
    });

  return (
    <DashboardContext.Provider
      value={{
        widgets,
        addWidget,
        removeWidget,
        updateWidget,
        moveWidgetUp,
        moveWidgetDown,
        reorderWidgets,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const ctx = useContext(DashboardContext);
  if (!ctx) {
    throw new Error("useDashboard must be used inside DashboardProvider");
  }
  return ctx;
};
