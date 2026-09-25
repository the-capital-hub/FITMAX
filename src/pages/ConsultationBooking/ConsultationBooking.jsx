import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./ConsultationBooking.css";
import "../fitmax-premium.css";


const teams=[
 {name:"FitMax Care Team",type:"Personalized rehabilitation",tag:"CARE MATCH",image:"https://images.pexels.com/photos/7659566/pexels-photo-7659566.jpeg?auto=compress&cs=tinysrgb&w=700"},
 {name:"Movement & Pain Team",type:"Musculoskeletal recovery",tag:"MOVEMENT",image:"https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=700"},
 {name:"Sports Recovery Team",type:"Sports and injury rehabilitation",tag:"SPORTS",image:"https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=700"}
];
const times=["09:00 AM","10:30 AM","12:00 PM","02:30 PM","04:00 PM","06:00 PM"];

export default function ConsultationBooking(){
 const navigate=useNavigate();
 const [team,setTeam]=useState("");
 const [date,setDate]=useState("");
 const [time,setTime]=useState("");
 const submit=e=>{e.preventDefault();if(!team||!date||!time)return;sessionStorage.setItem("fitmaxBooking",JSON.stringify({physio:team,date,time}));navigate("/payment")};
 return <div className="p2-page"><Navbar/><main className="p2-booking">
  <section className="p2-booking-hero"><div><span className="p2-kicker">03 / CONSULTATION</span><h1>Choose the moment that works for <em>you.</em></h1><p>Good care starts with enough time to listen. Pick your care team, date and preferred time.</p></div><div className="p2-booking-orbit"><div className="p2-orbit-center">CARE<br/>WITH YOU</div><span>LISTEN</span><span>ASSESS</span><span>GUIDE</span><span>PROGRESS</span></div></section>
  <form className="p2-booking-form" onSubmit={submit}>
   <section className="p2-booking-section"><div className="p2-booking-num">01</div><div><span className="p2-kicker">YOUR CARE TEAM</span><h2>Who would you like to start with?</h2><p>Choose the care approach that feels closest to what you need.</p>
    <div className="p2-team-grid">{teams.map(t=><button type="button" className={team===t.name?"p2-team active":"p2-team"} key={t.name} onClick={()=>setTeam(t.name)}><img src={t.image} alt="Physiotherapy care"/><div className="p2-team-overlay"><small>{t.tag}</small><strong>{t.name}</strong><span>{t.type}</span></div><i>↗</i></button>)}</div>
   </div></section>
   <section className="p2-booking-section"><div className="p2-booking-num">02</div><div><span className="p2-kicker">DATE</span><h2>Find a day that fits your life.</h2><p>Availability will be connected to the FitMax scheduling system.</p><div className="p2-date-wrap"><span>Preferred date</span><input type="date" min={new Date().toISOString().split("T")[0]} value={date} onChange={e=>setDate(e.target.value)}/></div></div></section>
   <section className="p2-booking-section"><div className="p2-booking-num">03</div><div><span className="p2-kicker">TIME</span><h2>When would you like to talk?</h2><div className="p2-time-grid">{times.map(t=><button type="button" key={t} className={time===t?"p2-time active":"p2-time"} onClick={()=>setTime(t)}>{t}<span>Available</span></button>)}</div></div></section>
   <div className="p2-booking-bottom"><button type="button" className="p2-back" onClick={()=>navigate("/patient-intake")}>← Back</button><div><span>03 / 05</span><button className="p2-main-button" type="submit">Review booking ↗</button></div></div>
  </form>
 </main><Footer/></div>
}
