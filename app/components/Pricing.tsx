'use client'

import { useState } from 'react'

type BillingPeriod = 'monthly' | 'yearly'

interface Plan {
  name: string
  price: { monthly: number; yearly: number }
  desc: string
  features: string[]
  dimmedFrom?: number
  featured: boolean
}

const plans: Plan[] = [
  {
    name: 'Basic',
    price: { monthly: 6, yearly: 5 },
    desc: 'For individuals looking to up their productivity gains.',
    features: [
      '50 Websites',
      'Unlimited Members',
      'Unlimited Data Retention',
      'Events & Conversion Goals',
      'Session Analysis',
      'Built-in URL Shortener',
    ],
    dimmedFrom: 4,
    featured: false,
  },
  {
    name: 'Plus',
    price: { monthly: 12, yearly: 10 },
    desc: 'For individuals looking to up their productivity gains.',
    features: [
      'Unlimited Websites',
      'Funnels',
      'Advanced URL Shortener',
      'Organizations',
      'A/B Testing & Segmentation',
      'Custom Domains',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: { monthly: 19, yearly: 16 },
    desc: 'For those looking to up their productivity gains.',
    features: [
      'Managed Cloud Setup',
      'On-premise Installation',
      'SAML-based Single Sign-On',
      'Raw Data Access',
      'Personal Onboarding',
      'Online User Training',
    ],
    featured: false,
  },
]

const Pricing = () => {
  const [billing, setBilling] = useState<BillingPeriod>('monthly')

  return (
    <section className="pricing" id="pricing">
      <div className="pricing-container">
        <h2 className="text-gradient">Pricing</h2>
        <p className="section-subtitle">
          Discover the benefits of the best Google Analytics alternative with a free 30-day trial
          with no credit card required. Starting at only <strong>$6 per month</strong> for 10,000 monthly page views.
        </p>

        <div className="pricing-toggle">
          <button
            className={billing === 'monthly' ? 'active' : ''}
            onClick={() => setBilling('monthly')}
            id="toggle-monthly"
          >
            Monthly
          </button>
          <button
            className={billing === 'yearly' ? 'active' : ''}
            onClick={() => setBilling('yearly')}
            id="toggle-yearly"
          >
            Yearly <span style={{ color: 'var(--color-accent)', fontWeight: 700, fontSize: 11 }}>-20%</span>
          </button>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <div key={plan.name} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
              <div className="plan-name">{plan.name}</div>
              {plan.featured && <span className="plan-badge">Most Popular</span>}

              <div className="plan-price">
                <span className="plan-price-amount">${plan.price[billing]}</span>
                <span className="plan-price-period">/month</span>
              </div>

              <button className="plan-cta" id={`cta-${plan.name.toLowerCase()}`}>
                Start Your Free Trial
              </button>

              <p className="plan-desc">{plan.desc}</p>
              <hr className="plan-divider" />

              <ul className="feature-list">
                {plan.features.map((feature, i) => (
                  <li
                    key={feature}
                    className={`feature-item ${plan.dimmedFrom !== undefined && i >= plan.dimmedFrom ? 'dimmed' : ''}`}
                  >
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
