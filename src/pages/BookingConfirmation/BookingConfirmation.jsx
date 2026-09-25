import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./BookingConfirmation.css";
import "../fitmax-premium.css";


export default function BookingConfirmation(){
 const navigate=useNavigate();
 const assessment=JSON.parse(sessionStorage.getItem("fitmaxAssessment")||"null");
 const booking=JSON.parse(sessionStorage.getItem("fitmaxBooking")||"null");
 const date=booking?.date?new Date(`${booking.date}T00:00:00`).toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"}):"Selected date";
 const reference=booking?`FM-${booking.date?.replaceAll("-","")||"REQUEST"}-${(assessment?.name||"FIT").slice(0,2).toUpperCase()}`:"FM-PENDING";
 return <div className="p2-page"><Navbar/><main className="p2-confirm">
  <div className="p2-confirm-glow"></div>
  <section className="p2-confirm-card"><div className="p2-confirm-mark">✓</div><span className="p2-kicker">05 / NEXT STEP</span><h1>Your recovery journey has <em>started.</em></h1><p>We have your request. Once the live FitMax backend is connected, your care team can review the details and confirm the appointment.</p>
   <div className="p2-confirm-ref"><span>REQUEST REFERENCE</span><strong>{reference}</strong></div>
   <div className="p2-confirm-details"><div><span>NAME</span><b>{assessment?.name||"Patient"}</b></div><div><span>DATE</span><b>{date}</b></div><div><span>TIME</span><b>{booking?.time||"Selected time"}</b></div><div><span>CARE</span><b>{booking?.physio||"FitMax Care Team"}</b></div></div>
   <div className="p2-recovery-path"><span>YOUR NEXT CHAPTER</span><div><b>01</b><strong>Assessment</strong><i>→</i><b>02</b><strong>Rehabilitation</strong><i>→</i><b>03</b><strong>Progress</strong><i>→</i><b>04</b><strong>Return to life</strong></div></div>
   <div className="p2-confirm-actions"><Link to="/" className="p2-main-button">Return to FitMax ↗</Link><button onClick={()=>{sessionStorage.clear();navigate("/book-assessment")}}>Start another request</button></div>
  </section>
 </main><Footer/></div>
}
