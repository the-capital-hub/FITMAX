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
  get: (id) => request(`/rehab-plans/patient/${id}`),
  create: (data) =>
    request("/rehab-plans", { method: "POST", body: JSON.stringify(data) }),
  update: (id, data) =>
    request(`/rehab-plans/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
    }),
};
