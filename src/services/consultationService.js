import { getAuthHeaders } from "../utils/auth";

const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  "https://physiotherapy-backend-wfyg.onrender.com/api";

const consultationService = {
  async createConsultation(consultationData) {
    const response = await fetch(
      `${API_BASE_URL}/consultations`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...getAuthHeaders(),
        },
        body: JSON.stringify(consultationData),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Unable to create consultation"
      );
    }

    return data;
  },

  async getMyConsultations() {
    const response = await fetch(
      `${API_BASE_URL}/consultations/my`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...getAuthHeaders(),
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Unable to fetch consultations"
      );
    }

    return data;
  },
};

export default consultationService;
