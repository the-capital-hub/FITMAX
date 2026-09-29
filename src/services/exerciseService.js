import { getAuthHeaders } from "../utils/auth";
const API=import.meta.env.VITE_API_URL||"https://physiotherapy-backend-wfyg.onrender.com/api";
const request=async(url,options={})=>{const r=await fetch(`${API}${url}`,{...options,headers:{"Content-Type":"application/json",...getAuthHeaders(),...(options.headers||{})}});const d=await r.json();if(!r.ok)throw new Error(d.message||"Request failed");return d;};
export default {
 library:()=>request("/exercises/library"),
 create:(data)=>request("/exercises/library",{method:"POST",body:JSON.stringify(data)}),
 assigned:(patientId)=>request(`/exercises/patient/${patientId}`),
 my:()=>request("/exercises/my"),
 assign:(data)=>request("/exercises/assign",{method:"POST",body:JSON.stringify(data)}),
 updateAssignment:(id,status)=>request(`/exercises/assignments/${id}`,{method:"PATCH",body:JSON.stringify({status})}),
};
