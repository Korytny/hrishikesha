'use client'
import { useEffect } from 'react'
import Link from 'next/link'

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          observer.unobserve(e.target)
        }
      }),
      { threshold: 0.1 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

const lineage = [
  {
    name: 'Шрила Бхактивинода Тхакур',
    years: '1838 – 1914',
    role: 'Основатель движения',
    quote: 'Наша единственная цель — пробудить любовь к Кришне в каждой душе.',
    detail: 'Великий вайшнавский ачарья, открывший место явления Господа Чайтаньи. Написал сотни книг и песен, возродив гаудия-вайшнавизм.',
    image: '/BT.jpg',
  },
  {
    name: 'Шрила Бхактисиддханта Сарасвати Тхакур',
    years: '1874 – 1937',
    role: 'Сын и ученик Бхактивиноды',
    quote: 'Проповедуйте повсеместно — каждое место священно для преданного.',
    detail: 'Основал 64 матха (монастыря) по всей Индии. Совершил духовную революцию в жизни Индии и вынес учение Чайтаньи Махапрабху за пределы Индии, отправив учеников проповедовать на Запад.',
    image: '/BS.jpg',
  },
  {
    name: 'Шрила Б.Р. Шридхар Махарадж',
    years: '1895 – 1988',
    role: 'Основатель Шри Чайтанья Сарасват Матха',
    quote: 'Сознание Кришны — это сознание красоты, любви и гармонии.',
    detail: 'Ближайший ученик Шрилы Бхактисиддханты Сарасвати Тхакура. Основал Шри Чайтанья Сарасват Матх в Навадвипе (Западная Бенгалия). Автор глубочайших философских трудов и духовных бесед.',
    image: '/SM.jpg',
  },
  {
    name: 'Шрила Б.С. Говинда Махарадж',
    years: '1929 – 2010',
    role: 'Преемник Шрилы Шридхара Махараджа',
    quote: 'Предайся — и Кришна позаботится о тебе лучше, чем ты можешь себе представить.',
    detail: 'Любимый ученик Шридхара Махараджа. Распространил учение Шрилы Гуру Махараджа на всех континентах. Воплощение смирения, юмора и глубочайшей преданности.',
    image: '/GM.jpg',
  },
  {
    name: 'Шрила Хришикеш Махарадж',
    years: '1960-е – настоящее время',
    role: 'Ученик и представитель Говинды Махараджа',
    quote: 'Каждый может найти путь к Кришне — Господь ждёт нас всех.',
    detail: 'Проповедует сознание Кришны на русском языке. Ведёт регулярные эфиры, лекции по священным писаниям, организует паломничества.',
    current: true,
    image: '/HM.jpg',
  },
]

const books = [
  { title: 'Поиск Шри Кришны', author: 'Шрила Шридхар Махарадж' },
  { title: 'Внутренний голос', author: 'Шрила Шридхар Махарадж' },
  { title: 'Красота и Нежность', author: 'Шрила Говинда Махарадж' },
  { title: 'Бхагавад-гита', author: 'Перевод и комментарии' },
]

export default function ParamparaPage() {
  useReveal()

  return (
    <>
      {/* Header */}
      <section className="hero-gradient pt-36 pb-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-xs tracking-[0.25em] text-gold-400/70 uppercase mb-4">Миссия SCSM</p>
          <h1 className="font-serif text-5xl sm:text-6xl text-ivory-100 mb-4">Гуру Парампара</h1>
          <div className="w-16 h-px bg-gold-400/50 mx-auto my-6" />
          <p className="font-sans text-base text-ivory-200/60 leading-relaxed">
            Непрерывная цепь духовной преемственности — от учителя к ученику — хранит и передаёт живое знание о Кришне через века.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-ivory-100 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-300/60 via-gold-400/40 to-transparent" />

            <div className="space-y-12">
              {lineage.map((guru, i) => {
                const isRight = i % 2 === 0
                return (
                  <div
                    key={guru.name}
                    className={`reveal relative flex items-start gap-8 ${isRight ? 'sm:flex-row' : 'sm:flex-row-reverse'} flex-row`}
                    style={{ transitionDelay: `${i * 0.1}s` }}
                  >
                    {/* Node dot */}
                    <div className={`absolute left-6 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 flex-shrink-0 z-10 ${guru.current ? 'bg-saffron-500 border-saffron-400' : 'bg-gold-400 border-gold-300'}`} />

                    {/* Card */}
                    <div className={`ml-16 sm:ml-0 sm:w-[45%] ${isRight ? 'sm:mr-auto sm:pr-10' : 'sm:ml-auto sm:pl-10'}`}>
                      <div className={`rounded-2xl p-6 border shadow-sm ${guru.current ? 'bg-saffron-50 border-saffron-200/60' : 'bg-white/70 border-gold-200/50'}`}>
                        <p className="font-sans text-xs tracking-widest text-gold-600 uppercase mb-1">{guru.role}</p>
                        <h3 className="font-serif text-xl sm:text-2xl text-dharma-900 mb-1">{guru.name}</h3>
                        <p className="font-sans text-xs text-dharma-500 mb-3">{guru.years}</p>
                        <p className="font-serif italic text-dharma-700 text-sm leading-relaxed mb-3">
                          «{guru.quote}»
                        </p>
                        <p className="font-sans text-xs text-dharma-600 leading-relaxed">{guru.detail}</p>
                      </div>
                    </div>

                    {/* Photo */}
                    {guru.image && (
                      <div className={`hidden sm:block sm:w-[45%] ${isRight ? 'sm:ml-auto sm:pl-10' : 'sm:mr-auto sm:pr-10'}`}>
                        <img src={guru.image} alt={guru.name} className="w-full h-auto rounded-2xl shadow-lg border border-gold-200/50" />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Books */}
      <section className="bg-dharma-900 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="reveal font-serif text-3xl sm:text-4xl text-ivory-100 mb-3">Книги учителей</h2>
            <p className="reveal font-sans text-sm text-ivory-200/50">Труды ачарьев — океан духовной мудрости</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {books.map((b, i) => (
              <div
                key={b.title}
                className="reveal bg-white/5 border border-gold-400/15 rounded-xl p-5 text-center card-hover"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-full h-28 bg-gradient-to-br from-dharma-700 to-dharma-600 rounded-lg mb-4 flex items-center justify-center text-gold-400/30 font-serif text-4xl">📖</div>
                <p className="font-serif text-ivory-100 text-sm leading-tight mb-1">{b.title}</p>
                <p className="font-sans text-xs text-gold-400/60">{b.author}</p>
              </div>
            ))}
          </div>
          <p className="reveal text-center mt-8 font-sans text-xs text-ivory-200/30">
            Ссылки на книги будут добавлены в разделе{' '}
            <Link href="/contacts" className="text-gold-400/60 hover:text-gold-400 underline">Контакты</Link>
          </p>
        </div>
      </section>
    </>
  )
}
