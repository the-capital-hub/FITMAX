import { getAuthHeaders } from "../utils/auth";

const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  "https://physiotherapy-backend-wfyg.onrender.com/api";

const rehabPlanService = {
  async createRehabPlan(planData) {
    const response = await fetch(
      `${API_BASE_URL}/rehab-plans`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...getAuthHeaders(),
        },
        body: JSON.stringify(planData),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Unable to create rehab plan"
      );
    }

    return data;
  },

  async getMyRehabPlan() {
    const response = await fetch(
      `${API_BASE_URL}/rehab-plans/my`,
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
        data.message || "Unable to fetch rehab plan"
      );
    }

    return data;
  },
};

export default rehabPlanService;