import { getAuthHeaders } from "../utils/auth";

const API =
  import.meta.env.VITE_API_URL ||
  "https://physiotherapy-backend-wfyg.onrender.com/api";

const request = async (url) => {
  const response = await fetch(`${API}${url}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeaders(),
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unable to fetch admin data");
  }

  return data;
};

const adminService = {
  getPatients: () => request("/users/admin/patients"),
  getPhysiotherapists: () => request("/users/admin/physiotherapists"),
};

export default adminService;
