const API_URL = "http://localhost:5000/api/dashboard";

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
