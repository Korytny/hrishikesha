'use client'
import { useEffect } from 'react'
import Link from 'next/link'

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

const socials = [
  {
    name: 'Telegram',
    desc: 'Канал Гурудева — ежедневные шлоки, объявления, эфиры',
    href: 'https://t.me/',
    icon: '✈',
    color: 'from-sky-500/20 to-sky-600/10 border-sky-200',
    textColor: 'text-sky-700',
  },
  {
    name: 'YouTube',
    desc: 'Видео-лекции, эфиры по Бхагавад-гите, Q&A',
    href: 'https://youtube.com/',
    icon: '▶',
    color: 'from-red-500/15 to-red-600/5 border-red-200',
    textColor: 'text-red-600',
  },
  {
    name: 'ВКонтакте',
    desc: 'Группа преданных, материалы и анонсы',
    href: 'https://vk.com/',
    icon: '◈',
    color: 'from-blue-500/15 to-blue-600/5 border-blue-200',
    textColor: 'text-blue-700',
  },
]

const projects = [
  { name: 'Шри Чайтанья Сарасват Матх', desc: 'Официальный сайт миссии SCSM (Навадвипа)', href: 'https://scsmath.com/' },
  { name: 'Говинда Махарадж', desc: 'Сайт, посвящённый Шриле Говинде Махараджу', href: '#' },
  { name: 'Книги ачарьев', desc: 'Труды Шридхара Махараджа и Говинды Махараджа', href: '#' },
]

export default function ContactsPage() {
  useReveal()

  return (
    <>
      <section className="hero-gradient pt-36 pb-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-xs tracking-[0.25em] text-gold-400/70 uppercase mb-4">Оставайтесь на связи</p>
          <h1 className="font-serif text-5xl sm:text-6xl text-ivory-100 mb-4">Контакты</h1>
          <div className="w-16 h-px bg-gold-400/50 mx-auto my-6" />
          <p className="font-sans text-base text-ivory-200/60 max-w-md mx-auto">
            Следите за расписанием эфиров, получайте шлоки дня и новости миссии через каналы Гурудева.
          </p>
        </div>
      </section>

      {/* Social networks */}
      <section className="bg-ivory-100 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="reveal font-serif text-3xl text-dharma-900 mb-3 text-center">Сети Гурудева</h2>
          <div className="divider-lotus mb-10"><span className="text-gold-400 text-lg">🪷</span></div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {socials.map((s, i) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`reveal card-hover block bg-gradient-to-br ${s.color} border rounded-2xl p-7 text-center group`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className={`text-4xl mb-4 ${s.textColor}`}>{s.icon}</div>
                <h3 className="font-serif text-xl text-dharma-900 mb-2">{s.name}</h3>
                <p className="font-sans text-sm text-dharma-600 leading-relaxed">{s.desc}</p>
                <p className={`font-sans text-xs mt-4 ${s.textColor} group-hover:underline`}>
                  Перейти →
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SCSM Projects */}
      <section className="bg-dharma-900 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="reveal font-serif text-3xl text-ivory-100 mb-3 text-center">Проекты SCSM и книги</h2>
          <div className="divider-lotus mb-10"><span className="text-gold-400 text-lg">🪷</span></div>

          <div className="space-y-4">
            {projects.map((p, i) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal card-hover flex items-center justify-between bg-white/5 border border-gold-400/15 rounded-xl px-6 py-5 group"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div>
                  <p className="font-serif text-ivory-100 text-lg group-hover:text-gold-300 transition-colors">{p.name}</p>
                  <p className="font-sans text-sm text-ivory-200/40 mt-0.5">{p.desc}</p>
                </div>
                <span className="text-gold-400/50 group-hover:text-gold-300 text-lg transition-colors ml-4">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Donate */}
      <section id="donate" className="bg-gradient-to-br from-gold-600 to-saffron-700 py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="reveal font-sans text-xs tracking-[0.2em] text-ivory-100/60 uppercase mb-4">Поддержка миссии</p>
          <h2 className="reveal font-serif text-4xl sm:text-5xl text-ivory-50 mb-6" style={{ transitionDelay: '0.1s' }}>
            🪷 Пожертвование
          </h2>
          <p className="reveal font-sans text-base text-ivory-100/80 leading-relaxed mb-4 max-w-lg mx-auto" style={{ transitionDelay: '0.2s' }}>
            Ваш вклад помогает распространять знание о Кришне, организовывать паломничества и создавать материалы для всех, кто ищет духовный путь.
          </p>
          <p className="reveal font-serif italic text-ivory-100/60 text-base mb-10" style={{ transitionDelay: '0.3s' }}>
            «Господь принимает даже листочек, цветок, фрукт или воду, если они преподнесены с любовью»
          </p>
          <div className="reveal flex flex-col sm:flex-row gap-4 justify-center" style={{ transitionDelay: '0.4s' }}>
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-ivory-50 text-saffron-700 font-sans text-sm tracking-wide rounded-full hover:bg-white transition-all shadow-lg"
            >
              Узнать реквизиты в Telegram
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
