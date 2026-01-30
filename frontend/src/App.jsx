import Dashboard from "./components/dashboard/Dashboard";
import { DashboardProvider } from "./context/DashboardContext";

function App() {
  return (
    <DashboardProvider>
      <Dashboard />
    </DashboardProvider>
  );
}

export default App;
