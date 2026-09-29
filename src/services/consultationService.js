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
    throw new Error(data.message || "Consultation request failed");
  }

  return data;
}

const consultationService = {
  createConsultation: (data) =>
    request("/consultations", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  create: (data) =>
    request("/consultations", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  getMyConsultations: () => request("/consultations/my"),

  physio: () => request("/consultations/physio"),

  update: (id, data) =>
    request(`/consultations/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
    }),
};

export default consultationService;
