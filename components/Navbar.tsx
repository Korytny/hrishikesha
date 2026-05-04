'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/',          label: 'Главная' },
  { href: '/parampara', label: 'Гуру Парампара' },
  { href: '/lessons',   label: 'Уроки Бхакти' },
  { href: '/gallery',   label: 'Галерея' },
  { href: '/service',   label: 'Пути Служения' },
  { href: '/contacts',  label: 'Контакты' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isHome = pathname === '/'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? 'bg-dharma-900/95 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <img src="/logo.png" alt="Хришикеш Махарадж" className="h-12 w-auto" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-7">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`nav-link font-sans text-sm tracking-wide transition-colors duration-200 ${
                  pathname === href
                    ? 'text-gold-400'
                    : 'text-ivory-200/80 hover:text-ivory-100'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Donate button */}
        <Link
          href="/contacts#donate"
          className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/60 text-gold-400 text-sm font-sans tracking-wide hover:bg-gold-400/10 transition-all duration-300"
        >
          <span>🪷</span> Пожертвовать
        </Link>

        {/* Burger */}
        <button
          className="lg:hidden text-ivory-100 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-dharma-900/98 border-t border-gold-500/20">
          <ul className="flex flex-col py-4">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-8 py-3 font-sans text-sm tracking-wide transition-colors ${
                    pathname === href
                      ? 'text-gold-400'
                      : 'text-ivory-200/80 hover:text-gold-400/80'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="px-8 pt-4 pb-2">
              <Link
                href="/contacts#donate"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold-500/60 text-gold-400 text-sm"
              >
                🪷 Пожертвовать
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
