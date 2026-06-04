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
        <div className="dashboard-header">
          <div className="dashboard-site">
            <span style={{ fontSize: 18, fontWeight: 700 }}>⬛</span>
            <span>acme.com</span>
            <span style={{ fontSize: 12, color: '#999' }}>▼</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span className="live-dot" />
              <span style={{ fontSize: 13, color: '#555', fontWeight: 500 }}>136 active visitors</span>
            </span>
          </div>

          <div className="dashboard-tabs">
            {(['Overview', 'Dashboard', 'Funnels', 'Sessions', 'Settings'] as const).map((tab) => (
              <button
                key={tab}
                id={`tab-${tab.toLowerCase()}`}
                className={activeTab === tab.toLowerCase() ? 'active' : ''}
                onClick={() => setActiveTab(tab.toLowerCase() as 'overview' | 'dashboard')}
              >
                {tab === 'Overview' && '⊞'}
                {tab === 'Dashboard' && '📊'}
                {tab === 'Funnels' && '⊿'}
                {tab === 'Sessions' && '◎'}
                {tab === 'Settings' && '⚙'}
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="dashboard-body">
          {/* Filter bar */}
          <div className="dashboard-filter-bar">
            <div style={{ display: 'flex', gap: 8 }}>
              <button className="filter-btn" id="btn-refresh">↻</button>
              <button className="filter-btn" id="btn-filter">⊞ Filter ▾</button>
              <button className="filter-btn" id="btn-views">📌 Views ▾</button>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button className="date-range-btn" id="btn-nav-prev">‹</button>
              <button className="date-range-btn" id="btn-nav-next">›</button>
              <button className="date-range-btn" id="btn-date-range">📅 Past 7 Days ▾</button>
              <button className="date-range-btn" id="btn-compare">⚖ Previous Period ▾</button>
            </div>
          </div>

          {/* Stats grid */}
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className={`stat-card ${i === 0 ? 'active' : ''}`}>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-value">{stat.value}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span className={`stat-change ${stat.positive ? 'positive' : 'negative'}`}>
                    {stat.positive ? '▲' : '▼'} {stat.change}
                  </span>
                  <span className="stat-prev">{stat.prev}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div style={{ position: 'relative', marginTop: 16 }}>
            <div className="chart-area">
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
