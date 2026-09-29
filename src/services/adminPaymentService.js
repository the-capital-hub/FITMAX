import { getAuthHeaders } from "../utils/auth";

const API = import.meta.env.VITE_API_URL || "https://physiotherapy-backend-wfyg.onrender.com/api";

const request = async (url, options = {}) => {
  const response = await fetch(`${API}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeaders(),
      ...(options.headers || {}),
    },
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Request failed");
  return data;
};

const adminPaymentService = {
  getAll: () => request("/payments"),
  updateStatus: (id, status) =>
    request(`/payments/${id}/status`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    }),
};

export default adminPaymentService;
