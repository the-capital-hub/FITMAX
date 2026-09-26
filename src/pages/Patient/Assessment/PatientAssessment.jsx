import "./PatientAssessment.css";

const items = [
  ["Primary condition","Knee rehabilitation"],
  ["Issue duration","1–3 months"],
  ["Current pain","4 / 10"],
  ["Surgery / procedure","Not recorded"],
  ["Main goal","Walk stairs with confidence"],
  ["Assessment status","Reviewed by care team"],
];

export default function PatientAssessment() {
  return (
    <div className="pa-page">
      <header className="pa-header"><span className="pa-kicker">ASSESSMENT</span><h1>Understand where you are. <em>Then move forward.</em></h1><p>Your assessment gives the care team context for building a rehabilitation plan around you.</p></header>
      <div className="pa-grid">
        <section className="pa-card pa-summary">
          <div className="pa-card-head"><div><span className="pa-label">ASSESSMENT SUMMARY</span><h2>Your recovery snapshot</h2></div><span className="pa-status">Reviewed</span></div>
          <div className="pa-data-grid">{items.map(([label,value])=><div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
        </section>
        <aside className="pa-card pa-note"><span className="pa-label">CARE NOTE</span><h2>Progress is personal.</h2><p>Your assessment is a starting point. Your physiotherapist may update it as your movement, symptoms and goals change.</p><div className="pa-note-line">Last reviewed · 2 days ago</div></aside>
      </div>
      <section className="pa-card pa-history"><span className="pa-label">ASSESSMENT HISTORY</span><h2>Care milestones</h2><div className="pa-timeline"><div><b>01</b><span>Initial intake</span><small>Recovery goals recorded</small></div><div><b>02</b><span>Care review</span><small>Current condition reviewed</small></div><div><b>03</b><span>Rehab plan</span><small>Personalized program started</small></div></div></section>
    </div>
  );
}
