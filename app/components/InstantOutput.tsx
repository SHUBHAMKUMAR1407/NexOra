const InstantOutput = () => {
  return (
    <section className="instant-output" id="features">
      <div className="instant-output-container">
        <div className="section-badge">
          <span className="section-badge-num">2</span>
          INSTANT OUTPUT
        </div>
        <h2>Unlock Key Insights</h2>
        <p className="section-subtitle">
          With a powerful yet easy-to-use dashboard, you can access the most relevant
          data necessary to understand your customers and make the right decisions.
        </p>

        <div className="features-grid-sym">
          {/* Track Everything */}
          <div className="feature-card" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <h3>Track Everything You Need</h3>
            <p style={{ marginBottom: 16 }}>
              With a wide range of data points, you get a detailed understanding of your
              visitors and target audience.
            </p>
            <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
              <img 
                src="https://framerusercontent.com/images/X87jAlbYbJ0hdTyTZ6QIMoQoOo.svg" 
                alt="Track Everything You Need" 
                style={{ width: '100%', maxWidth: '350px', height: 'auto' }}
              />
            </div>
          </div>

          {/* Filter With One Click */}
          <div className="feature-card" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <h3>Filter With One Click</h3>
            <p style={{ marginBottom: 16 }}>
              Pirsch makes it effortless to explore your stats through intuitive filtering
              on a super-fast, highly visual dashboard.
            </p>
            <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
              <img 
                src="https://framerusercontent.com/images/A718dQKmWnJEhhnu0SJfCGxzDM.svg" 
                alt="Filter With One Click" 
                style={{ width: '100%', maxWidth: '350px', height: 'auto' }}
              />
              <div className="fade-bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InstantOutput
