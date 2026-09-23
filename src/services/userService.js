import {
  getAuthHeaders,
} from "../utils/auth";

const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000/api";

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