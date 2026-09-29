import { getAuthHeaders } from "../utils/auth";
const API =
  import.meta.env.VITE_API_URL ||
  "https://physiotherapy-backend-wfyg.onrender.com/api";
const request = async (url, options = {}) => {
  const r = await fetch(`${API}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeaders(),
      ...(options.headers || {}),
    },
  });
  const d = await r.json();
  if (!r.ok) throw new Error(d.message || "Request failed");
  return d;
};
export default {
  my: () => request("/progress/my"),
  patient: (id) => request(`/progress/patient/${id}`),
  checkin: (data) =>
    request("/progress/checkin", {
      method: "POST",
      body: JSON.stringify(data),
    }),
};
