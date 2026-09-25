import {Link} from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./AboutFitmax.css";
import "../fitmax-premium.css";


const principles=[
["01","Patient first","FitMax is built around the person recovering, their goals and the life they want to return to."],
["02","Personalized care","Recovery is not one size fits all. Care should reflect the condition, starting point and progress."],
["03","Progress matters","Movement, strength, consistency and confidence are part of the recovery journey."],
["04","Clinical guidance","Digital rehabilitation should remain connected to professional physiotherapy and appropriate safety guidance."]
];

function AboutFitmax(){
 return <div className="ab-page"><Navbar/><main>
  <section className="ab-hero"><div className="ab-container ab-grid"><div><span className="ab-kicker">ABOUT FITMAX</span><h1>Helping people move back to life.</h1><p>FitMax is a patient first physiotherapy and rehabilitation experience designed to make recovery more personal, structured and connected.</p><Link to="/book-assessment">Start Your Recovery ↗</Link></div><div className="ab-image"><img src="https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=1500" alt="Illustrative physiotherapy care"/><small>ILLUSTRATIVE IMAGE</small></div></div></section>
  <section className="ab-story"><div className="ab-container ab-two"><div><span className="ab-label">WHY FITMAX EXISTS</span><h2>Recovery should help you return to the things that matter.</h2></div><div><p>Pain can be only one part of a recovery journey. FitMax focuses on movement, strength, confidence, function and independence, with physiotherapy at the center of care.</p><p>The experience is designed to connect assessment, rehabilitation, guided exercise, progress tracking and communication with the care team.</p></div></div></section>
  <section className="ab-principles"><div className="ab-container"><span className="ab-label">OUR PRINCIPLES</span><h2>Care built around the person, not just the condition.</h2><div className="ab-cards">{principles.map(x=><article key={x[1]}><b>{x[0]}</b><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div></div></section>
  <section className="ab-journey"><div className="ab-container ab-two"><div><span className="ab-label">THE FITMAX JOURNEY</span><h2>From injury to confidence.</h2><p>FitMax brings the recovery journey into a clearer sequence so patients can understand where they are and what comes next.</p></div><div className="ab-list">{["Injury or movement concern","Assessment","Personalized rehabilitation","Progress and consistency","Confidence and function","Return to life"].map((x,i)=><div key={x}><b>0{i+1}</b><span>{x}</span></div>)}</div></div></section>
  <section className="ab-safety"><div className="ab-container ab-two"><div><span className="ab-label">PROFESSIONAL CARE</span><h2>Digital care should still feel human.</h2></div><p>FitMax is designed to support professional physiotherapy, clear communication and appropriate escalation when a direct clinical assessment is needed.</p></div></section>
  <section className="ab-cta"><div className="ab-container"><span className="ab-kicker">YOUR RECOVERY MATTERS</span><h2>Ready to take the next step?</h2><p>Start with an assessment and understand the path ahead.</p><Link to="/book-assessment">Book an Assessment ↗</Link></div></section>
 </main><Footer/></div>
}
export default AboutFitmax;
