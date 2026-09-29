import { getAuthHeaders } from "../utils/auth";
const API=import.meta.env.VITE_API_URL||"https://physiotherapy-backend-wfyg.onrender.com/api";
const request=async(url,options={})=>{const r=await fetch(`${API}${url}`,{...options,headers:{"Content-Type":"application/json",...getAuthHeaders(),...(options.headers||{})}});const d=await r.json();if(!r.ok)throw new Error(d.message||"Request failed");return d;};
export default {
 get:(id)=>request(`/assessments/patient/${id}`),
 updateStatus:(id,status)=>request(`/assessments/${id}/status`,{method:"PATCH",body:JSON.stringify({status})}),
};
