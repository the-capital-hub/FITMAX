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

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || "Payment request failed");
  }

  return data;
}

const paymentService = {
  createPayment: (data) =>
    request("/payments", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  getMyPayments: () => request("/payments/my"),

  getAdminPayments: () => request("/payments"),

  updateStatus: (id, status) =>
    request(`/payments/${id}/status`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    }),
};

export default paymentService;
