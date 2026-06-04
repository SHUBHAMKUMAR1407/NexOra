'use client'

import { useState } from 'react'

import Link from 'next/link'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link href="/" className="navbar-logo" aria-label="Home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <span style={{ color: 'var(--color-accent)', fontWeight: 800, fontSize: '24px', letterSpacing: '1px' }}>NEX</span>
          <span style={{ fontWeight: 800, fontSize: '24px', letterSpacing: '1px', color: 'currentColor' }}>ORA</span>
        </Link>

        {/* Nav Links */}
        <ul className="navbar-nav">
          <li><Link href="#home" className="nav-link-caps">home</Link></li>
          <li><Link href="#features" className="nav-link-caps">features</Link></li>
          <li><Link href="#pricing" className="nav-link-caps">pricing</Link></li>
          <li><Link href="#testimonials" className="nav-link-caps">testimonials</Link></li>
          <li><Link href="#faq" className="nav-link-caps">FAQ</Link></li>
        </ul>

        {/* Actions */}
        <div className="navbar-actions">
          <button className="btn-secondary" id="nav-login">Log in</button>
          <button className="btn-primary" id="nav-cta">Try It For Free</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
