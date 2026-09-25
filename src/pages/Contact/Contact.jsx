import {Link} from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Contact.css";
import "../fitmax-premium.css";


function Contact(){
 return <div className="ct-page"><Navbar/><main>
  <section className="ct-hero"><div className="ct-container ct-grid"><div><span className="ct-kicker">CONTACT FITMAX</span><h1>Let's talk about your recovery.</h1><p>Have a question about physiotherapy, rehabilitation, assessments or the next step? Reach out and our team can guide you.</p></div><div className="ct-card"><small>NEED TO START?</small><strong>Book an assessment.</strong><p>Start with a clear conversation about your condition, goals and recovery direction.</p><Link to="/book-assessment">Book an Assessment ↗</Link></div></div></section>
  <section className="ct-main"><div className="ct-container ct-grid"><div><span className="ct-label">GET IN TOUCH</span><h2>We are here to help you find the next step.</h2><p>Use the form to share what you need help with. Keep your message focused on your recovery question or enquiry.</p><div className="ct-info"><div><b>EMAIL</b><span>hello@fitmax.com</span></div><div><b>SUPPORT</b><span>Patient support and booking enquiries</span></div><div><b>CARE</b><span>Physiotherapy and rehabilitation guidance</span></div></div></div>
  <form className="ct-form" onSubmit={e=>e.preventDefault()}><div className="ct-row"><label>Full Name<input placeholder="Your name"/></label><label>Email Address<input type="email" placeholder="you@example.com"/></label></div><label>Phone Number<input type="tel" placeholder="Your phone number"/></label><label>What can we help with?<select defaultValue=""><option value="" disabled>Select an option</option><option>Book an assessment</option><option>Physiotherapy question</option><option>Rehabilitation support</option><option>General enquiry</option></select></label><label>Message<textarea rows="6" placeholder="Tell us briefly how we can help."/></label><button type="submit">Send Enquiry ↗</button><small>We will use the information you provide to respond to your enquiry.</small></form></div></section>
  <section className="ct-bottom"><div className="ct-container ct-two"><div><span className="ct-label">OTHER WAYS TO EXPLORE</span><h2>Find your recovery path.</h2></div><div className="ct-links"><Link to="/conditions">Explore Conditions ↗</Link><Link to="/services">View Physiotherapy Services ↗</Link><Link to="/faqs">Read FAQs ↗</Link><Link to="/patient-stories">Explore Patient Stories ↗</Link></div></div></section>
 </main><Footer/></div>
}
export default Contact;
