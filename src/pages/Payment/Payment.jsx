import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Payment.css";
import "../fitmax-premium.css";


export default function Payment(){
 const navigate=useNavigate();
 const [method,setMethod]=useState("card");
 const booking=JSON.parse(sessionStorage.getItem("fitmaxBooking")||"null");
 const assessment=JSON.parse(sessionStorage.getItem("fitmaxAssessment")||"null");
 const intake=JSON.parse(sessionStorage.getItem("fitmaxIntake")||"null");
 const date=booking?.date?new Date(`${booking.date}T00:00:00`).toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"}):"Your selected date";
 const submit=e=>{e.preventDefault();sessionStorage.setItem("fitmaxPayment",JSON.stringify({method,status:"pending"}));navigate("/booking-confirmation")};
 return <div className="p2-page"><Navbar/><main className="p2-payment">
  <section className="p2-payment-head"><span className="p2-kicker">04 / PAYMENT</span><h1>A clear checkout for a <em>clear next step.</em></h1><p>Review your care request, choose how you would like to pay, and continue.</p></section>
  <div className="p2-payment-layout">
   <aside className="p2-receipt"><div className="p2-receipt-top"><span>FITMAX / RECOVERY REQUEST</span><b>04</b></div><h2>{assessment?.name||"Your assessment"}</h2><div className="p2-receipt-line"><span>Care team</span><strong>{booking?.physio||"FitMax Care Team"}</strong></div><div className="p2-receipt-line"><span>Date</span><strong>{date}</strong></div><div className="p2-receipt-line"><span>Time</span><strong>{booking?.time||"Selected time"}</strong></div><div className="p2-receipt-line"><span>Focus</span><strong>{intake?.condition||assessment?.goal||"Recovery support"}</strong></div><div className="p2-receipt-total"><span>Assessment fee</span><strong>Confirm at checkout</strong></div><div className="p2-receipt-foot">Your final payable amount can be connected to the FitMax pricing and payment service.</div></aside>
   <form className="p2-pay-card" onSubmit={submit}><div className="p2-pay-card-head"><span className="p2-kicker">SECURE CHECKOUT</span><h2>How would you like to pay?</h2></div><div className="p2-methods">{["card","upi","later"].map(m=><button type="button" key={m} className={method===m?"p2-method active":"p2-method"} onClick={()=>setMethod(m)}><b>{m==="card"?"Card":m==="upi"?"UPI":"Pay later"}</b><span>{m==="card"?"Credit or debit card":m==="upi"?"Use your UPI app":"When this option is enabled"}</span><i>{method===m?"✓":"+"}</i></button>)}</div><div className="p2-secure"><span>⌁</span><p><b>Your payment is protected.</b><br/>The live gateway will be connected during backend integration. This frontend does not process real payments.</p></div><button className="p2-main-button" type="submit">Continue to confirmation <span>↗</span></button></form>
  </div>
 </main><Footer/></div>
}
