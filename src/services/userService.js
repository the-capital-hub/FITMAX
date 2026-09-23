import {
  getAuthHeaders,
} from "../utils/auth";

const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  "https://fitmax-backend-nbbn.onrender.com/api";
const userService = {
  async getProfile() {
    const response = await fetch(
      `${API_BASE_URL}/users/profile`,
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
          "Unable to fetch profile"
      );
    }

    return data;
  },
};

export default userService;