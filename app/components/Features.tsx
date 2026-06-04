import Image from 'next/image'

const techIcons = [
  'https://cdn.worldvectorlogo.com/logos/react-2.svg',
  'https://cdn.worldvectorlogo.com/logos/vue-9.svg',
  'https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg',
  'https://cdn.worldvectorlogo.com/logos/nestjs.svg',
  'https://cdn.worldvectorlogo.com/logos/laravel-2.svg',
  'https://cdn.worldvectorlogo.com/logos/svelte-1.svg',
  'https://cdn.worldvectorlogo.com/logos/golang-1.svg',
  'https://cdn.worldvectorlogo.com/logos/rust.svg'
]

const Features = () => {
  return (
    <section className="features" id="features">
      <div className="features-container">
        <div className="section-badge">
          <span className="section-badge-num">1</span>
          GET STARTED IN SECONDS
        </div>
        <h2>Set Up In Minutes</h2>
        <p className="section-subtitle">
          Simply add the script to your site, choose from a variety of plugins, or go for
          the API backend integration. Pirsch is the plug-and-play Google Analytics alternative.
        </p>

        <div className="features-grid-asym">
          {/* Effortless Setup (Span 3) */}
          <div className="feature-card feature-span-3">
            <h3>Effortless Setup</h3>
            <p style={{ marginBottom: 24 }}>
              Pirsch offers plugins, libraries, and tutorials for the most popular CMSs,
              website builders, and programming languages to get you up and running in no time.
            </p>
            <div className="tech-marquee">
              <div className="tech-marquee-gradient-left"></div>
              <div className="tech-marquee-gradient-right"></div>
              <div className="tech-marquee-content">
                {[...techIcons, ...techIcons].map((src, i) => (
                  <img key={i} src={src} alt="tech" className="tech-logo" />
                ))}
              </div>
            </div>
          </div>

          {/* Seamless Switch (Span 2) */}
          <div className="feature-card feature-span-2">
            <h3>Seamless Switch</h3>
            <p>
              Migrating from other web analytics solutions? Import your data from Plausible,
              Fathom, or Google Analytics in just a few clicks and easily continue where you left off.
            </p>
          </div>

          {/* No Cookie Banner (Span 2) */}
          <div className="feature-card feature-span-2">
            <h3>No Cookie Banner</h3>
            <p>
              Say goodbye to consent banners: Pirsch works without cookies and never stores
              your visitors personal identifiable information.
            </p>
          </div>

          {/* Privacy by Design (Span 3) */}
          <div className="feature-card feature-span-3" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
            <div style={{ flex: 1 }}>
              <h3>Privacy-Friendly by Design</h3>
              <p>
                Built from the ground up with privacy in mind and with an open-source core,
                Pirsch offers uncompromising GDPR, CCPA, PECR, and Schrems II compliant data
                protection. All data is hosted on a secure server cluster in Germany.
              </p>
            </div>
            <div style={{ flexShrink: 0, width: '120px' }}>
              <img 
                src="https://framerusercontent.com/images/6jTglLZFhLYMIuOe7EC0QFeykU.png" 
                alt="Privacy-Friendly" 
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
