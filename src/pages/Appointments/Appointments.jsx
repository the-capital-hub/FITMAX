import { useEffect, useMemo, useState } from "react";
import AdminLayout from "../../components/AdminLayout/AdminLayout";
import adminAppointmentService from "../../services/adminAppointmentService";
import "./Appointments.css";
import "../fitmax-premium.css";

function formatDate(date,time){if(!date)return "—";const d=new Date(date);const label=d.toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"});return time?`${label} · ${time}`:label;}

function Appointments(){
 const [items,setItems]=useState([]); const [stats,setStats]=useState({total:0,scheduled:0,completed:0,cancelled:0}); const [loading,setLoading]=useState(true); const [error,setError]=useState(""); const [filter,setFilter]=useState("All");
 const load=async()=>{try{setLoading(true);setError("");const d=await adminAppointmentService.getAll();setItems(d.consultations||[]);setStats(d.stats||{});}catch(e){setError(e.message||"Unable to load appointments");}finally{setLoading(false);}};
 useEffect(()=>{load();},[]);
 const filtered=useMemo(()=>filter==="All"?items:items.filter(x=>x.status===filter),[items,filter]);
 const update=async(id,status)=>{try{const d=await adminAppointmentService.updateStatus(id,status);setItems(prev=>prev.map(x=>x._id===id?d.consultation:x));setStats(prev=>({...prev,total:items.length,scheduled:items.filter(x=>x._id===id?status:x.status).filter(x=>x.status==="Scheduled").length,completed:items.filter(x=>x._id===id?status:x.status).filter(x=>x.status==="Completed").length,cancelled:items.filter(x=>x._id===id?status:x.status).filter(x=>x.status==="Cancelled").length}));}catch(e){setError(e.message||"Unable to update status");}};
 return <AdminLayout><div className="admin-page-heading"><div><span className="admin-eyebrow">FITMAX ADMIN</span><h1>Appointments</h1><p>Manage real patient and physiotherapist appointments.</p></div><button className="admin-secondary-btn" onClick={load}>Refresh</button></div>
 <div className="admin-stat-grid">{[["Total",stats.total||0,"All appointments"],["Scheduled",stats.scheduled||0,"Upcoming"],["Completed",stats.completed||0,"Completed"],["Cancelled",stats.cancelled||0,"Cancelled"]].map(([l,v,n])=><article className="admin-stat-card" key={l}><span>{l}</span><strong>{v}</strong><small>{n}</small></article>)}</div>
 <section className="admin-panel"><div className="admin-panel-header"><div><h2>Appointments</h2><p>{loading?"Loading appointments…":"Live records from FitMax database"}</p></div><div style={{display:"flex",gap:8,flexWrap:"wrap"}}>{["All","Scheduled","Completed","Cancelled"].map(x=><button key={x} className={filter===x?"admin-primary-btn":"admin-secondary-btn"} onClick={()=>setFilter(x)}>{x}</button>)}</div></div>
 {error&&<div className="admin-error">{error}</div>}
 {!loading&&filtered.length===0?<div className="admin-empty">No appointments found.</div>:<div className="admin-table-wrap"><table className="admin-table"><thead><tr><th>Patient</th><th>Physiotherapist</th><th>Appointment</th><th>Type</th><th>Status</th><th>Action</th></tr></thead><tbody>{filtered.map(x=><tr key={x._id}><td>{x.patient?`${x.patient.firstName||""} ${x.patient.lastName||""}`.trim():"—"}<br/><small>{x.patient?.email||""}</small></td><td>{x.physio?`${x.physio.firstName||""} ${x.physio.lastName||""}`.trim():"Unassigned"}</td><td>{formatDate(x.date,x.time)}<br/><small>{x.title}</small></td><td>{x.type}</td><td><span className="admin-status">{x.status}</span></td><td><select value={x.status} onChange={e=>update(x._id,e.target.value)}><option>Scheduled</option><option>Completed</option><option>Cancelled</option></select></td></tr>)}</tbody></table></div>}</section></AdminLayout>;}
export default Appointments;
