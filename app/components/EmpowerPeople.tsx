import Link from 'next/link'

const EmpowerPeople: React.FC = () => {
  return (
    <section className="empower">
      <div className="empower-container">
        <div className="section-badge">
          <span className="section-badge-num">4</span>
          SMART TEAMWORK
        </div>
        <h2 className="text-gradient">Empower People With Data</h2>
        <p className="section-subtitle">
          Reduce friction and enhance productivity by getting the right information to the right
          people with minimal effort, enabling them to thrive and excel.
        </p>

        {/* Main wide card */}
        <div className="empower-main-card">
          <div className="empower-main-content">
            <h3>Easily Manage Teams and Sites</h3>
            <p>
              Work happens in teams. That's why Nexora enables collaboration right from the start:
              Simply invite team members or clients via email, assign them roles, and give them access
              to the dashboards they need to excel. All people, sites and custom themes in one place.
            </p>
            <button className="btn-trial" id="empower-trial-btn">
              Start 30-Day Free Trial
            </button>
          </div>

          {/* Network visual */}
          <div className="empower-visual">
            <svg width="100%" height="200" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Connection lines */}
              <line x1="160" y1="100" x2="80" y2="50" stroke="#d0ccc4" strokeWidth="1.5" strokeDasharray="4 3" />
              <line x1="160" y1="100" x2="240" y2="50" stroke="#d0ccc4" strokeWidth="1.5" strokeDasharray="4 3" />
              <line x1="160" y1="100" x2="60" y2="140" stroke="#d0ccc4" strokeWidth="1.5" strokeDasharray="4 3" />
              <line x1="160" y1="100" x2="260" y2="140" stroke="#d0ccc4" strokeWidth="1.5" strokeDasharray="4 3" />
              <line x1="160" y1="100" x2="160" y2="170" stroke="#d0ccc4" strokeWidth="1.5" strokeDasharray="4 3" />

              {/* Center node */}
              <circle cx="160" cy="100" r="28" fill="white" stroke="#e0ddd6" strokeWidth="1.5" />
              <text x="160" y="96" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1a1a1a">NEX</text>
              <text x="160" y="110" textAnchor="middle" fontSize="11" fontWeight="700" fill="#3ecf8e">ORA</text>

              {/* Member nodes */}
              {[
                { cx: 80, cy: 50, label: 'Admin', color: '#3ecf8e' },
                { cx: 240, cy: 50, label: 'Dev', color: '#667eea' },
                { cx: 60, cy: 140, label: 'Design', color: '#f093fb' },
                { cx: 260, cy: 140, label: 'Sales', color: '#f59e0b' },
                { cx: 160, cy: 175, label: 'Analytics', color: '#4facfe' },
              ].map((node, i) => (
                <g key={i}>
                  <circle cx={node.cx} cy={node.cy} r="18" fill={node.color} opacity="0.15" />
                  <circle cx={node.cx} cy={node.cy} r="12" fill={node.color} opacity="0.9" />
                  <text x={node.cx} y={node.cy + 4} textAnchor="middle" fontSize="7" fontWeight="700" fill="white">
                    {node.label.slice(0, 3).toUpperCase()}
                  </text>
                </g>
              ))}
            </svg>

            {/* Floating label */}
            <div className="empower-site-chip">analytics.nexora.io</div>
          </div>
        </div>

        {/* Two smaller cards */}
        <div className="empower-sub-grid">
          <div className="feature-card">
            <h3>Receive Automatic Email Reports</h3>
            <p>
              Keep colleagues, customers, or partners in the loop with automatic email reports. Regularly receive a concise summary of the latest activities with just one click.
            </p>
          </div>
          <div className="feature-card">
            <h3>Share Dashboards With Anybody</h3>
            <p>
              Working with external partners? Create unique access links to securely grant access to dashboards or make them public on your personal subdomain.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EmpowerPeople
