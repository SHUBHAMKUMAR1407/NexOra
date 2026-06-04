'use client'

import { useState } from 'react'

interface Testimonial {
  name: string
  role: string
  text: string
  color: string
  initial: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Chen',
    role: 'Head of Growth @ TechFlow',
    text: '"Switching to Nexora was the best decision we made this year. We finally have clean, accurate data without worrying about cookie consent banners. The funnel analysis alone saved us weeks of manual work."',
    color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    initial: 'S',
  },
  {
    name: 'Marcus Rivera',
    role: 'CTO @ BuildFast',
    text: '"We tried three analytics platforms before Nexora. The simplicity is deceptive — it handles everything we need while staying completely GDPR compliant. Our team adopted it in a day."',
    color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    initial: 'M',
  },
  {
    name: 'Priya Nair',
    role: 'Product Lead @ NovaSaaS',
    text: '"Nexora gives us real-time insight without the overhead. The session recordings and funnels are incredibly useful. I show it to every founder I advise."',
    color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    initial: 'P',
  },
]

const Testimonials = () => {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  const t = testimonials[current]

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">
        <h2>What Our Customers Say</h2>
        <p className="section-subtitle">
          Join thousands of businesses that trust Nexora for privacy-first analytics.
        </p>

        <div className="testimonial-carousel">
          {/* Avatar panel */}
          <div className="testimonial-avatar-panel">
            <div
              className="testimonial-avatar-large"
              style={{ background: t.color }}
            >
              {t.initial}
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="testimonial-carousel-name">{t.name}</div>
            <div className="testimonial-carousel-role">{t.role}</div>
            <p className="testimonial-carousel-text">{t.text}</p>

            <div className="testimonial-carousel-nav">
              <button className="carousel-btn" onClick={prev} id="carousel-prev" aria-label="Previous">←</button>
              <button className="carousel-btn" onClick={next} id="carousel-next" aria-label="Next">→</button>
            </div>
            <div className="carousel-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`carousel-dot ${i === current ? 'active' : ''}`}
                  onClick={() => setCurrent(i)}
                  id={`carousel-dot-${i}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
