import DashboardPreview from './DashboardPreview'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <h1 className="text-gradient">Smarter Analytics</h1>
        <p>
          Powerful, cookie-free insights with full GDPR & CCPA compliance.
        </p>

        <div className="hero-actions">
          <button className="btn-hero-primary" id="hero-cta-primary">
            Try it for free
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
          <button className="btn-hero-secondary" id="hero-cta-demo">
            View live demo
          </button>
        </div>

        {/* Social Proof */}
        <div className="hero-social-proof" style={{ justifyContent: 'center', marginTop: '60px', marginBottom: '20px' }}>
          <div className="hero-avatars">
            <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=128&q=75" alt="Avatar 1" />
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=128&q=75" alt="Avatar 2" />
            <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=128&q=75" alt="Avatar 3" />
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=128&q=75" alt="Avatar 4" />
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=128&q=75" alt="Avatar 5" />
          </div>
          <div className="hero-stars-container">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#eab308" stroke="#eab308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                </svg>
              ))}
            </div>
            <span>Trusted by 500+ Customers</span>
          </div>
        </div>
      </div>

      {/* Dashboard Illustration */}
      <div className="hero-illustration">
        <DashboardPreview />
        <div className="hero-illustration-fade"></div>
      </div>
    </section>
  )
}

export default Hero
