'use client'

import { useState } from 'react'

interface FAQItem {
  q: string
  a: string
}

const faqs: FAQItem[] = [
  {
    q: 'Is Nexora really cookie-free?',
    a: 'Yes. Nexora uses a privacy-first approach that does not rely on cookies or local storage. We use statistical methods to track unique visitors without storing any personal data on devices.',
  },
  {
    q: 'Do I need to show a cookie consent banner?',
    a: 'No. Since Nexora does not use cookies or collect personal data, you are not required to show a cookie consent banner under GDPR, CCPA, or PECR regulations.',
  },
  {
    q: 'How accurate is the data without cookies?',
    a: 'Highly accurate for most use cases. Our unique visitor tracking uses a combination of IP hashing and user-agent fingerprinting that is deleted daily, providing great accuracy while maintaining privacy.',
  },
  {
    q: 'Can I self-host Nexora?',
    a: 'Yes, the Enterprise plan includes full on-premise installation support. You get all the source code, Docker images, and dedicated support to set up Nexora on your own infrastructure.',
  },
  {
    q: 'How does the 30-day free trial work?',
    a: 'Sign up with no credit card required. You get full access to all features of the Plus plan for 30 days. After the trial, choose the plan that fits your needs — or cancel with one click.',
  },
  {
    q: 'Does Nexora work with single-page applications?',
    a: 'Absolutely. Our lightweight script (< 1KB) automatically tracks client-side navigation in React, Vue, Angular, and other SPA frameworks without any additional configuration.',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="faq" id="faq">
      <div className="faq-container">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-list-clean">
          {faqs.map((item, i) => (
            <div key={i} className="faq-item-clean">
              <button
                className="faq-question-clean"
                onClick={() => toggle(i)}
                id={`faq-${i}`}
                aria-expanded={openIndex === i}
              >
                {item.q}
                <svg
                  className={`faq-chevron ${openIndex === i ? 'open' : ''}`}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="faq-answer-clean">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
