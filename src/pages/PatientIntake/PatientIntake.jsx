import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./PatientIntake.css";
import "../fitmax-premium.css";


const conditions = ["ACL / Knee", "Back", "Neck", "Shoulder", "Sports injury", "Accident recovery", "Post surgery", "Fracture", "Mobility"];
const durations = ["Under 2 weeks", "2–6 weeks", "1–3 months", "3+ months", "Not sure"];

export default function PatientIntake() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ condition:"", duration:"", pain:5, surgery:"", notes:"" });
  const set=(key,value)=>setForm(p=>({...p,[key]:value}));

  const submit=e=>{
    e.preventDefault();
    if(!form.condition||!form.duration)return;
    sessionStorage.setItem("fitmaxIntake",JSON.stringify(form));
    navigate("/consultation-booking");
  };

  return <div className="p2-page"><Navbar/><main className="p2-intake">
    <section className="p2-intake-hero">
      <div><span className="p2-kicker">02 / PATIENT INTAKE</span><h1>The details behind the <em>recovery.</em></h1><p>Tell us what you are experiencing. The better we understand your starting point, the more relevant the next step can be.</p></div>
      <div className="p2-intake-hero-note"><b>YOUR STORY MATTERS</b><span>Condition is only one part of recovery.</span></div>
    </section>
    <div className="p2-intake-progress"><span className="active">Assessment</span><i></i><span className="active">Your story</span><i></i><span>Booking</span><i></i><span>Payment</span></div>

    <form className="p2-intake-form" onSubmit={submit}>
      <section className="p2-question">
        <div className="p2-q-index">01</div>
        <div className="p2-q-body"><span className="p2-kicker">WHERE ARE YOU STARTING?</span><h2>What are you recovering from?</h2><p>Choose the closest match. You can explain more below.</p>
          <div className="p2-condition-grid">{conditions.map(x=><button type="button" key={x} className={form.condition===x?"p2-choice active":"p2-choice"} onClick={()=>set("condition",x)}><span>{x}</span><i>↗</i></button>)}</div>
        </div>
      </section>

      <section className="p2-question">
        <div className="p2-q-index">02</div>
        <div className="p2-q-body"><span className="p2-kicker">YOUR TIMELINE</span><h2>How long has this been affecting you?</h2>
          <div className="p2-duration-row">{durations.map(x=><button type="button" key={x} className={form.duration===x?"p2-duration active":"p2-duration"} onClick={()=>set("duration",x)}>{x}</button>)}</div>
        </div>
      </section>

      <section className="p2-question">
        <div className="p2-q-index">03</div>
        <div className="p2-q-body"><span className="p2-kicker">YOUR PAIN TODAY</span><h2>Where would you place your pain right now?</h2><p>Move across the scale. This is a starting point, not a diagnosis.</p>
          <div className="p2-pain-value"><strong>{form.pain}</strong><span>/ 10</span><small>{form.pain===0?"No pain":form.pain<=3?"Mild":form.pain<=6?"Moderate":form.pain<=8?"High":"Severe"}</small></div>
          <input className="p2-range" type="range" min="0" max="10" value={form.pain} onChange={e=>set("pain",Number(e.target.value))}/>
          <div className="p2-range-labels"><span>Comfortable</span><span>Most intense</span></div>
        </div>
      </section>

      <section className="p2-question">
        <div className="p2-q-index">04</div>
        <div className="p2-q-body"><span className="p2-kicker">THE CONTEXT</span><h2>Anything else your care team should know?</h2><p>Previous treatment, surgery, symptoms, limitations or goals can be useful here.</p>
          <textarea value={form.notes} onChange={e=>set("notes",e.target.value)} placeholder="Write a few words about your situation..." />
        </div>
      </section>

      <div className="p2-intake-actions"><button type="button" onClick={()=>navigate("/book-assessment")} className="p2-back">← Back</button><button className="p2-main-button" type="submit">Continue to consultation <span>↗</span></button></div>
    </form>
  </main><Footer/></div>
}
