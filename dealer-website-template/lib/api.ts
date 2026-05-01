const API_URL = process.env.FORECOURIQ_API_URL || "https://app.forecouriq.com/api/public";
const API_KEY = process.env.DEALERSHIP_API_KEY;

export async function fetchFromAPI(endpoint: string, options: RequestInit = {}) {
  if (!API_KEY) {
    console.warn("DEALERSHIP_API_KEY is missing");
  }

  const res = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "x-dealership-key": API_KEY || "",
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || `API Error: ${res.status}`);
  }

  return res.json();
}

export const dealerAPI = {
  getDealership: () => fetchFromAPI("/dealership"),
  getVehicles: (params: string = "") => fetchFromAPI(`/vehicles${params}`),
  getVehicle: (id: string) => fetchFromAPI(`/vehicles/${id}`),
  submitLead: (data: any) => fetchFromAPI("/leads", {
    method: "POST",
    body: JSON.stringify(data),
  }),
};
