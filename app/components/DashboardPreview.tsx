'use client'

import { useState } from 'react'

interface StatData {
  label: string
  value: string
  change: string
  prev: string
  positive: boolean
}

const stats: StatData[] = [
  { label: 'Unique Visitors', value: '23.9k', change: '+22.3%', prev: '19.5k', positive: true },
  { label: 'Page Views', value: '68.8k', change: '+23.6%', prev: '55.7k', positive: true },
  { label: 'Sessions', value: '42.7k', change: '+19.3%', prev: '35.8k', positive: true },
  { label: 'Bounce Rate', value: '45.1%', change: '-10.1%', prev: '41%', positive: false },
  { label: 'Session Duration', value: '1m 52s', change: '+4.3%', prev: '1m 47s', positive: true },
]

const chartData = [
  { day: 'Tu, Nov 16', prev: 65, curr: 80 },
  { day: 'We, Nov 17', prev: 45, curr: 62 },
  { day: 'Th, Nov 18', prev: 42, curr: 38 },
  { day: 'Fr, Nov 19', prev: 55, curr: 78 },
  { day: 'Sa, Nov 20', prev: 60, curr: 65 },
  { day: 'Su, Nov 21', prev: 35, curr: 64 },
  { day: 'Mo, Nov 22', prev: 72, curr: 85 },
]

const pageData = [
  { path: '/', views: '25.2k' },
  { path: '/pricing', views: '19.6k' },
  { path: '/blog', views: '7.8k' },
]

const referrerData = [
  { source: 'news.ycombinator.com', views: '14.1k', color: '#f97316' },
  { source: 'twitter.com', views: '6.4k', color: '#1da1f2' },
  { source: 'google.com', views: '3.1k', color: '#4285f4' },
]

const DashboardPreview = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'dashboard'>('dashboard')
  const [activePageTab, setActivePageTab] = useState<'Pages' | 'Entry Pages' | 'Exit Pages'>('Pages')
  const [activeRefTab, setActiveRefTab] = useState<'Referrers' | 'Sources' | 'Media' | 'Campaigns'>('Referrers')

  const maxVal = Math.max(...chartData.map(d => Math.max(d.prev, d.curr)))

  return (
    <div className="dashboard-preview">
      <div className="dashboard-card">
        {/* Header */}
        <div className="dashboard-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="dashboard-site">
            <span style={{ fontSize: 18, fontWeight: 700 }}>⬛</span>
            <span style={{ fontWeight: 600 }}>acme.com</span>
            <span style={{ fontSize: 10, color: '#999' }}>▼</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6, marginLeft: 16 }}>
              <span className="live-dot" />
              <span style={{ fontSize: 13, color: '#555', fontWeight: 500 }}>136 active visitors</span>
            </span>
          </div>
          <div className="dashboard-header-actions" style={{ display: 'flex', gap: 16, alignItems: 'center', color: '#666' }}>
            <span style={{ fontSize: 18, cursor: 'pointer' }}>+</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18h12m-12-6h12m-12-6h12M5 18h.01M5 12h.01M5 6h.01"/></svg>
              <span style={{ fontSize: 10 }}>▼</span>
            </span>
            <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=32&h=32&q=75" alt="user" style={{ width: 24, height: 24, borderRadius: '50%' }} />
          </div>
        </div>

        <div className="dashboard-tabs">
          {(['Overview', 'Dashboard', 'Funnels', 'Sessions', 'Settings'] as const).map((tab) => (
            <button
              key={tab}
              id={`tab-${tab.toLowerCase()}`}
              className={activeTab === tab.toLowerCase() ? 'active' : ''}
              onClick={() => setActiveTab(tab.toLowerCase() as 'overview' | 'dashboard')}
            >
              <span className="tab-icon">
                {tab === 'Overview' && '⊞'}
                {tab === 'Dashboard' && <span style={{ color: 'var(--color-accent)' }}>ılı</span>}
                {tab === 'Funnels' && '⊿'}
                {tab === 'Sessions' && '◎'}
                {tab === 'Settings' && '⚙'}
              </span>
              {tab}
            </button>
          ))}
        </div>

        {/* Body */}
        <div className="dashboard-body">
          {/* Filter bar */}
          <div className="dashboard-filter-bar">
            <div style={{ display: 'flex', gap: 16 }}>
              <button className="filter-btn-text" id="btn-refresh">↻</button>
              <button className="filter-btn-text" id="btn-filter">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/></svg> Filter ▾
              </button>
              <button className="filter-btn-text" id="btn-views">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg> Views ▾
              </button>
            </div>
            <div style={{ display: 'flex', gap: 16 }}>
              <button className="filter-btn-text">‹</button>
              <button className="filter-btn-text">›</button>
              <button className="filter-btn-text">📅 Past 7 Days ▾</button>
              <button className="filter-btn-text">⚖ Previous Period ▾</button>
            </div>
          </div>

          {/* Stats grid */}
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className={`stat-card ${i === 0 ? 'active' : ''}`}>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-value-row">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-change-col">
                    <span className={`stat-change ${stat.positive ? 'positive' : 'negative'}`}>
                      {stat.positive ? '▲' : '▼'} {stat.change}
                    </span>
                    <span className="stat-prev">{stat.prev}</span>
                  </div>
                </div>
              </div>
            ))}
            <div className="stat-card" style={{ display: 'flex', justifyContent: 'flex-end', padding: '14px 16px', border: 'none' }}>
              <div style={{ display: 'flex', gap: 8, height: 'fit-content' }}>
                <div style={{ background: '#f5f5f5', borderRadius: 6, padding: '4px 6px' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
                </div>
                <div style={{ color: '#aaa', padding: '4px 0' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                </div>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div style={{ position: 'relative', marginTop: 16 }}>
            <div className="chart-area">
              <div className="chart-grid-lines">
                <div className="chart-grid-line" />
                <div className="chart-grid-line" />
                <div className="chart-grid-line" />
                <div className="chart-grid-line" />
              </div>
              <div className="chart-y-labels">
                <span>6.0k</span>
                <span>4.0k</span>
                <span>2.0k</span>
                <span>0</span>
              </div>
              <div className="chart-bars">
                {chartData.map((d, i) => (
                  <div key={i} className="chart-col">
                    <div
                      className="chart-bar prev"
                      style={{ height: `${(d.prev / maxVal) * 100}%` }}
                      title={`Previous: ${d.prev * 50}`}
                    />
                    <div
                      className="chart-bar curr"
                      style={{ height: `${(d.curr / maxVal) * 100}%` }}
                      title={`Current: ${d.curr * 50}`}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="chart-x-labels">
              {chartData.map((d, i) => (
                <span key={i}>{d.day}</span>
              ))}
            </div>
          </div>

          {/* Bottom tables */}
          <div className="dashboard-bottom">
            <div className="data-table">
              <div className="data-table-header">
                {(['Pages', 'Entry Pages', 'Exit Pages'] as const).map((tab) => (
                  <button
                    key={tab}
                    id={`pages-tab-${tab.replace(' ', '-').toLowerCase()}`}
                    className={activePageTab === tab ? 'active' : ''}
                    onClick={() => setActivePageTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              {pageData.map((row, i) => (
                <div key={i} className="data-table-row">
                  <span className="row-path">{row.path}</span>
                  <span className="row-value">{row.views}</span>
                </div>
              ))}
            </div>

            <div className="data-table">
              <div className="data-table-header">
                {(['Referrers', 'Sources', 'Media', 'Campaigns'] as const).map((tab) => (
                  <button
                    key={tab}
                    id={`ref-tab-${tab.toLowerCase()}`}
                    className={activeRefTab === tab ? 'active' : ''}
                    onClick={() => setActiveRefTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              {referrerData.map((row, i) => (
                <div key={i} className="data-table-row">
                  <span className="row-path" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ width: 12, height: 12, borderRadius: 3, background: row.color, display: 'inline-block', flexShrink: 0 }} />
                    {row.source}
                  </span>
                  <span className="row-value">{row.views}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPreview
