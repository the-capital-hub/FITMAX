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
  dashboard: () => request("/dashboard/physio"),
  profile: () => request("/users/profile"),
  updateProfile: (data) =>
    request("/users/profile", { method: "PUT", body: JSON.stringify(data) }),
};
