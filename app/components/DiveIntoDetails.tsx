const DiveIntoDetails = () => {
  return (
    <section className="dive-details" id="features">
      <div className="dive-details-container">
        <div className="section-badge">
          <span className="section-badge-num">3</span>
          ADVANCED ANALYTICS
        </div>
        <h2>Dive Into the Details</h2>
        <p className="section-subtitle">
          See beyond clicks with the power of events, A/B testing, and tag-based
          segmentation, drill down into single sessions, or track your performance
          with flexible conversion goals.
        </p>

        <div className="features-grid-3">
          {/* Analyze Funnels */}
          <div className="feature-card" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <h3>Analyze Funnels</h3>
            <p style={{ marginBottom: 16 }}>
              Effectively visualize and fully understand user journeys in a matter of seconds.
            </p>
            <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
              <img 
                src="https://framerusercontent.com/images/3FWbibttHBsnge8Td2JRVbNo.svg" 
                alt="Analyze Funnels" 
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>

          {/* Explore Sessions */}
          <div className="feature-card" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <h3>Explore Sessions</h3>
            <p style={{ marginBottom: 16 }}>
              Learn more about individual user journeys with in-depth session summaries.
            </p>
            <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
              <img 
                src="https://framerusercontent.com/images/eaFbEnL3er77EwtTIiUEMgYTLnQ.svg" 
                alt="Explore Sessions" 
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>

          {/* Segment Visitors */}
          <div className="feature-card" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <h3>Segment Visitors</h3>
            <p style={{ marginBottom: 16 }}>
              Leverage your data with tags for A/B testing or segmentation and channel attribution.
            </p>
            <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
              <img 
                src="https://framerusercontent.com/images/82g4S0XdXlaUWPtoLMLmaJhP1yc.svg" 
                alt="Segment Visitors" 
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DiveIntoDetails
