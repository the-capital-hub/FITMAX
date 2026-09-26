import "./PatientProgress.css";

const weeks = [
  { label:"W1", value:42 }, { label:"W2", value:48 }, { label:"W3", value:54 },
  { label:"W4", value:59 }, { label:"W5", value:61 }, { label:"W6", value:68 },
];

export default function PatientProgress() {
  return (
    <div className="pg-page">
      <header className="pg-header"><span className="pg-kicker">PROGRESS</span><h1>Notice the change. <em>Keep building.</em></h1><p>Progress is more than a number. It is movement, consistency and the confidence to do more.</p></header>
      <section className="pg-metrics"><div><span>OVERALL RECOVERY</span><strong>68%</strong><small>Current plan progress</small></div><div><span>EXERCISE CONSISTENCY</span><strong>84%</strong><small>Last 30 days</small></div><div><span>PAIN TREND</span><strong>4/10</strong><small>Current reported level</small></div></section>
      <section className="pg-grid">
        <article className="pg-card pg-chart"><div className="pg-card-head"><div><span className="pg-label">RECOVERY TREND</span><h2>Your progress over time</h2></div><span className="pg-period">6 weeks</span></div><div className="pg-bars">{weeks.map(w=><div key={w.label}><span style={{height:`${w.value}%`}} /><small>{w.label}</small></div>)}</div><div className="pg-chart-note"><span>↗</span><p>Your progress has been moving steadily upward across the current rehabilitation phase.</p></div></article>
        <article className="pg-card pg-milestones"><span className="pg-label">MILESTONES</span><h2>What you have achieved.</h2><div className="pg-milestone done"><b>✓</b><div><strong>Comfortable daily walking</strong><small>Completed</small></div></div><div className="pg-milestone done"><b>✓</b><div><strong>Improved knee control</strong><small>Completed</small></div></div><div className="pg-milestone"><b>03</b><div><strong>Confident stair movement</strong><small>Current focus</small></div></div></article>
      </section>
    </div>
  );
}
