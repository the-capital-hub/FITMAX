import { getAuthHeaders } from "../utils/auth";

const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  "https://physiotherapy-backend-wfyg.onrender.com/api";

const assessmentService = {
  async createAssessment(assessmentData) {
    const response = await fetch(
      `${API_BASE_URL}/assessments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...getAuthHeaders(),
        },
        body: JSON.stringify(assessmentData),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message ||
          "Assessment submission failed"
      );
    }

    return data;
  },

  async getMyAssessment() {
    const response = await fetch(
      `${API_BASE_URL}/assessments/my`,
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
        data.message ||
          "Unable to fetch assessment"
      );
    }

    return data;
  },
};

export default assessmentService;