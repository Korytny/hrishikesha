'use client'

import { useState, useEffect } from 'react'

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

const categories = [
  { id: 'all',    label: 'Все' },
  { id: 'gita',   label: 'Бхагавад-гита' },
  { id: 'qa',     label: 'Вопросы и ответы' },
  { id: 'shloka', label: 'Шлоки' },
  { id: 'lecture',label: 'Лекции' },
]

const lessons = [
  {
    id: 1, cat: 'gita', type: 'Видео · Эфир', duration: '1:24:00',
    title: 'Бхагавад-гита 2.47 — Твоё право только на действие',
    excerpt: 'Кришна объясняет Арджуне суть карма-йоги: действуй без привязанности к результату. Разбор одной из ключевых шлок.',
    shloka: 'карманй эвадхикарас те ма пхалешу кадачана',
    tag: 'Глава 2'
  },
  {
    id: 2, cat: 'qa', type: 'Аудио', duration: '42:00',
    title: 'Как совместить духовную практику с работой и семьёй?',
    excerpt: 'Махарадж отвечает на вопросы слушателей о том, как найти баланс между материальными обязанностями и бхакти.',
    shloka: null,
    tag: 'Практика'
  },
  {
    id: 3, cat: 'shloka', type: 'Текст', duration: '5 мин',
    title: 'Бг. 9.22 — Обещание Кришны своим преданным',
    excerpt: 'Те, кто поклоняется Кришне с любовью, никогда не испытывают недостатка ни в чём. Разбор и медитация на шлоку.',
    shloka: 'ананйаш чинтайанто мам йе джанах парйупасате',
    tag: 'Шлока дня'
  },
  {
    id: 4, cat: 'gita', type: 'Видео · Эфир', duration: '1:10:00',
    title: 'Бхагавад-гита 18.66 — Высшая тайна',
    excerpt: 'Заключительное наставление Кришны: оставь все религии и предайся только Ему. Самая важная шлока всей Гиты.',
    shloka: 'сарва-дхарман паритйаджйа',
    tag: 'Глава 18'
  },
  {
    id: 5, cat: 'lecture', type: 'Аудио', duration: '55:00',
    title: 'Что такое бхакти? Путь любви и преданности',
    excerpt: 'Вводная лекция о природе преданного служения, его девяти формах и о том, почему бхакти — высший путь.',
    shloka: null,
    tag: 'Основы'
  },
  {
    id: 6, cat: 'shloka', type: 'Текст', duration: '7 мин',
    title: 'Шикшаштака (1) — Молитва о чистоте сердца',
    excerpt: 'Единственное произведение Господа Чайтаньи, дошедшее до нас в записи. Восемь стихов о высшей цели жизни.',
    shloka: 'чето-дарпана-марджанам бхава-маха-давагни-нирвапанам',
    tag: 'Чайтанья'
  },
  {
    id: 7, cat: 'qa', type: 'Видео', duration: '38:00',
    title: 'Карма и реинкарнация — отвечает Махарадж',
    excerpt: 'Вопросы о природе кармы, перерождении и о том, как бхакти освобождает от круговорота рождений и смертей.',
    shloka: null,
    tag: 'Философия'
  },
  {
    id: 8, cat: 'lecture', type: 'Аудио', duration: '1:08:00',
    title: 'Навадвипа — священная дхама Господа Чайтаньи',
    excerpt: 'Лекция о месте рождения Господа Чайтаньи, значении Навадвипа-дхамы и духовном смысле паломничества.',
    shloka: null,
    tag: 'Дхама'
  },
]

export default function LessonsPage() {
  useReveal()
  const [active, setActive] = useState('all')

  const filtered = active === 'all' ? lessons : lessons.filter(l => l.cat === active)

  const typeIcon = (type: string) => {
    if (type.includes('Видео')) return '▶'
    if (type.includes('Аудио')) return '♫'
    return '✦'
  }

  return (
    <>
      {/* Header */}
      <section className="hero-gradient pt-36 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="font-sans text-xs tracking-[0.25em] text-gold-400/70 uppercase mb-4">Духовное знание</p>
          <h1 className="font-serif text-5xl sm:text-6xl text-ivory-100 mb-4">Уроки Бхакти</h1>
          <div className="w-16 h-px bg-gold-400/50 my-6" />
          <p className="font-sans text-base text-ivory-200/60 leading-relaxed max-w-xl">
            Лекции, эфиры, разборы шлок и ответы на вопросы — всё, чтобы прикоснуться к сознанию Кришны.
          </p>
        </div>
      </section>

      {/* Filter + Content */}
      <section className="bg-ivory-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`px-5 py-2 rounded-full font-sans text-sm tracking-wide transition-all duration-200 ${
                  active === cat.id
                    ? 'bg-saffron-500 text-ivory-50 shadow-md shadow-saffron-200'
                    : 'bg-white/70 text-dharma-600 border border-gold-200/60 hover:border-gold-400/40 hover:text-dharma-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Lessons grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((lesson, i) => (
              <div
                key={lesson.id}
                className="reveal card-hover bg-white/60 border border-gold-200/50 rounded-2xl overflow-hidden"
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                {/* Top bar */}
                <div className="bg-gradient-to-r from-dharma-800 to-dharma-700 px-5 py-4 flex items-center justify-between">
                  <span className="font-sans text-xs text-gold-300/80 tracking-wide">{lesson.type}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-gold-400/60 text-sm">{typeIcon(lesson.type)}</span>
                    <span className="font-sans text-xs text-ivory-200/40">{lesson.duration}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-0.5 bg-saffron-50 text-saffron-600 rounded-full text-xs font-sans">{lesson.tag}</span>
                  </div>
                  <h3 className="font-serif text-lg text-dharma-900 mb-3 leading-snug">{lesson.title}</h3>

                  {lesson.shloka && (
                    <p className="sanskrit text-base text-gold-600 mb-3 border-l-2 border-gold-300/50 pl-3">
                      {lesson.shloka}...
                    </p>
                  )}

                  <p className="font-sans text-sm text-dharma-600 leading-relaxed">{lesson.excerpt}</p>

                  <button className="mt-5 w-full py-2.5 border border-saffron-200 text-saffron-600 rounded-lg font-sans text-sm hover:bg-saffron-50 transition-colors">
                    Открыть урок
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center font-serif text-xl text-dharma-400 py-16">
              Материалы скоро появятся 🪷
            </p>
          )}
        </div>
      </section>
    </>
  )
}
