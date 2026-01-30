const API_URL =
  "https://smart-campus-dashboard-1-2pm9.onrender.com/api/dashboard";

export const fetchDashboard = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch dashboard");
  return res.json();
};

export const saveDashboard = async (widgets) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ widgets }),
  });

  if (!res.ok) throw new Error("Failed to save dashboard");
};
