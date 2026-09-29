import { getAuthHeaders } from "../utils/auth";
const API=import.meta.env.VITE_API_URL||"https://physiotherapy-backend-wfyg.onrender.com/api";
const request=async(url,options={})=>{const r=await fetch(`${API}${url}`,{...options,headers:{"Content-Type":"application/json",...getAuthHeaders(),...(options.headers||{})}});const d=await r.json();if(!r.ok)throw new Error(d.message||"Request failed");return d;};
export default {
 getPatients:()=>request("/users/patients"),
 getPatient:(id)=>request(`/users/patients/${id}`),
 getAssessment:(id)=>request(`/assessments/patient/${id}`),
 getRehabPlan:(id)=>request(`/rehab-plans/patient/${id}`),
 getExercises:(id)=>request(`/exercises/patient/${id}`),
 getProgress:(id)=>request(`/progress/patient/${id}`),
};
