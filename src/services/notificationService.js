import { getAuthHeaders } from "../utils/auth";

const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  "https://physiotherapy-backend-wfyg.onrender.com/api";

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeaders(),
      ...(options.headers || {}),
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Notification request failed"
    );
  }

  return data;
}

const notificationService = {
  getMy: () => request("/notifications"),

  markRead: (id) =>
    request(`/notifications/${id}/read`, {
      method: "PATCH",
    }),

  markAllRead: () =>
    request("/notifications/read-all", {
      method: "PATCH",
    }),

  remove: (id) =>
    request(`/notifications/${id}`, {
      method: "DELETE",
    }),
};

export default notificationService;