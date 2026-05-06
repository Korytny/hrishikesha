'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

/* ─── Scroll reveal hook ─────────────────────────────────── */
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
      { threshold: 0.15 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

/* ─── Quote block ───────────────────────────────────────── */
function Quote({ sanskrit, russian, source }: { sanskrit: string; russian: string; source: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <p className="sanskrit text-2xl sm:text-3xl mb-3">{sanskrit}</p>
      <p className="font-serif text-lg sm:text-xl text-dharma-700 italic leading-relaxed mb-3">{russian}</p>
      <p className="font-sans text-sm text-gold-600 tracking-widest uppercase">{source}</p>
    </div>
  )
}

/* ─── Teacher card ──────────────────────────────────────── */
function TeacherCard({
  name, title, description, delay, image
}: { name: string; title: string; description: string; delay: string; image?: string }) {
  return (
    <div className={`reveal card-hover bg-white/80 rounded-2xl overflow-hidden border border-gold-200/60 shadow-sm`} style={{ transitionDelay: delay }}>
      {image ? (
        <div className="h-72 sm:h-80 overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
      ) : (
        <div className="img-placeholder h-72 sm:h-80 text-center p-6 flex-col gap-2" style={{ display: 'flex' }}>
          <span className="text-gold-400/40 text-5xl mb-2">🪷</span>
          <span className="text-ivory-200/40 text-sm">Фото {name}</span>
        </div>
      )}
      <div className="p-6">
        <p className="font-sans text-xs tracking-widest uppercase text-gold-600 mb-1">{title}</p>
        <h3 className="font-serif text-2xl text-dharma-900 mb-3">{name}</h3>
        <p className="font-sans text-sm text-dharma-600 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

/* ─── Teaching preview card ─────────────────────────────── */
function TeachingCard({
  tag, title, excerpt, href, delay, image
}: { tag: string; title: string; excerpt: string; href: string; delay: string; image?: string }) {
  return (
    <Link href={href} className={`reveal card-hover block bg-white/50 border border-gold-200/50 rounded-xl overflow-hidden group`} style={{ transitionDelay: delay }}>
      {image && (
        <div className="h-48 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
      )}
      <div className="p-6">
        <span className="inline-block px-3 py-1 bg-saffron-50 text-saffron-600 rounded-full text-xs font-sans tracking-wide mb-3">
          {tag}
        </span>
        <h4 className="font-serif text-xl text-dharma-900 mb-2 group-hover:text-saffron-600 transition-colors">
          {title}
        </h4>
        <p className="font-sans text-sm text-dharma-600 leading-relaxed">{excerpt}</p>
        <p className="font-sans text-xs text-gold-500 mt-4 tracking-wide">Читать далее →</p>
      </div>
    </Link>
  )
}

/* ─── Page ─────────────────────────────────────────────── */
export default function HomePage() {
  useReveal()

  return (
    <>
      {/* ═══ HERO ══════════════════════════════════════════════ */}
      <section className="hero-gradient h-screen flex items-end relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute bottom-0 left-1/3 -translate-x-1/2 w-[600px] h-[600px] rounded-full border border-gold-400/10" />
        <div className="absolute bottom-0 left-1/3 -translate-x-1/2 w-[400px] h-[400px] rounded-full border border-gold-400/15" />
        <div className="absolute bottom-0 left-1/3 -translate-x-1/2 w-[200px] h-[200px] rounded-full border border-gold-400/20" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 md:grid-cols-[40%_60%] gap-4 md:gap-8 items-end h-full">
          {/* Left — Photo */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/hero.png"
              alt="Шрила Хришикеш Махарадж"
              className="w-[289px] sm:w-[437px] md:w-[558px] lg:w-[655px] xl:w-[715px] h-auto object-contain"
            />
          </div>

          {/* Right — Text */}
          <div className="text-center lg:text-left lg:mb-12">
            {/* Main title */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-ivory-100 leading-tight mb-4">
              Шрила Бхакти Севан<br />
              <span className="text-gold-shimmer">Хришикеш Махарадж</span>
            </h1>

            {/* Sanskrit quote */}
            <div className="my-6">
              <p className="font-serif italic text-ivory-200/60 text-base sm:text-lg leading-relaxed mb-3">
                «Я склоняюсь перед лотосными стопами Шри Гуру, который, как говорится во всех писаниях и как считают все садху, является Самими Господом, и который в то же время является дорогим преданным Господа»
              </p>
              <p className="font-sans text-sm text-gold-500/40 tracking-wide">— «Шри Гурваштакам», Вишванатх Чакраварти Тхакур</p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8 mb-8">
              <Link
                href="/service"
                className="px-8 py-4 bg-saffron-500 hover:bg-saffron-400 text-ivory-50 font-sans text-sm tracking-wide rounded-full transition-all duration-300 shadow-lg shadow-saffron-900/30 hover:shadow-saffron-800/40 hover:-translate-y-0.5"
              >
                Пути Служения
              </Link>
              <Link
                href="/parampara"
                className="hidden lg:block px-8 py-4 border border-gold-400/50 text-gold-300 hover:text-gold-200 hover:border-gold-400/80 font-sans text-sm tracking-wide rounded-full transition-all duration-300 hover:bg-gold-400/5"
              >
                Гуру Парампара
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-gold-400/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold-400/50" />
        </div>
      </section>

      {/* ═══ ABOUT TEACHERS ═════════════════════════════════════ */}
      <section className="bg-ivory-100 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="reveal font-sans text-xs tracking-[0.2em] text-saffron-500 uppercase mb-3">
              Духовная преемственность
            </p>
            <h2 className="reveal font-serif text-4xl sm:text-5xl text-dharma-900 mb-4" style={{ transitionDelay: '0.1s' }}>
              Учитель и его Гуру
            </h2>
            <div className="divider-lotus">
              <span className="text-gold-400 text-lg">🪷</span>
            </div>
            <p className="reveal font-sans text-base text-dharma-600 max-w-xl mx-auto leading-relaxed" style={{ transitionDelay: '0.2s' }}>
              Истинное духовное знание передаётся через непрерывную цепь учителей — гуру-парампару. Те, кто осветил наш путь.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <TeacherCard
              name="Шрила Говинда Махарадж"
              title="Президент-Севайте Ачарья Шри Чайтанья Сарасват Матха"
              description="Преемник Шрилы Шридхара Махараджа. Он распространил концепцию Шри Чайтанья Сарасват Матха — учение своего Шрилы Гуру Махараджа, Шрилы Шридхара Махараджа на всех континентах."
              delay="0s"
              image="/image_3.jpg"
            />
            <TeacherCard
              name="Шрила Хришикеш Махарадж"
              title="Духовный учитель Шри Чайтанья Сарасват Матха"
              description="Преданный ученик и представитель Шрилы Говинды Махараджа. Его служение посвящено изучению и распространению священных писаний. Вещает на русском языке, проводит паломничества, читает лекции по «Бхагавад-гите» и «Шримад-Бхагаватам»."
              delay="0.15s"
              image="/image_2.jpg"
            />
          </div>

          <div className="text-center mt-12">
            <Link
              href="/parampara"
              className="reveal inline-flex items-center gap-2 font-sans text-sm text-saffron-600 hover:text-saffron-500 tracking-wide transition-colors"
            >
              Узнать всю цепь парампары →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ QUOTE BANNER ═══════════════════════════════════════ */}
      <section className="bg-dharma-800 py-12 px-6 mandala-bg">
        <div className="reveal max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <p className="sanskrit text-2xl sm:text-3xl text-gold-300 mb-4 leading-relaxed">
              кр̣ш̣н̣а-бхакти-раса-бха̄вита̄ матих̣<br/>
              крӣйата̄м̣ йади куто 'пи лабхйате<br/>
              татра лаулйам апи мӯлйам экалам̇<br/>
              джанма-кот̣и-сукр̣таир на лабхйате
            </p>
            <p className="font-serif italic text-ivory-200/80 text-sm sm:text-base leading-relaxed mb-4">
              Настоящая преданность Кришне (кришна-бхакти) очень редко достижима. Где бы вы ни увидели такую преданность, приобретите ее ценой своего страстного желания, лаулйам. Лишь оно может дать вам это сокровище. Это единственная цена, и миллиарды жизней в добродетели не дадут вам кришна-бхакти. Для этого необходим голод, и он возникает, когда желудок пуст. Сначала примите немного лекарства и очистите свой организм. Тогда постепенно появится голод.
            </p>
            <p className="font-sans text-sm text-gold-500/60 tracking-wide">— Говинда Махарадж</p>
          </div>

          <div className="flex justify-center">
            <img
              src="/095.jpg"
              alt="Божества"
              className="w-full max-w-md h-auto object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ═══ LATEST TEACHINGS ═══════════════════════════════════ */}
      <section className="bg-ivory-100 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="reveal font-sans text-xs tracking-[0.2em] text-saffron-500 uppercase mb-3">
              Последние материалы
            </p>
            <h2 className="reveal font-serif text-4xl sm:text-5xl text-dharma-900 mb-4" style={{ transitionDelay: '0.1s' }}>
              Уроки Бхакти
            </h2>
            <div className="divider-lotus"><span className="text-gold-400 text-lg">🪷</span></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TeachingCard
              tag="Бхагавад-гита · Эфир"
              title="Гл. 2 — Санкхья-йога: вечная природа души"
              excerpt="Кришна раскрывает Арджуне фундаментальное различие между временным телом и вечной душой..."
              href="/lessons"
              delay="0s"
              image="/105.jpg"
            />
            <TeachingCard
              tag="Вопросы и Ответы"
              title="Как начать практику бхакти в современной жизни?"
              excerpt="Махарадж отвечает на вопросы слушателей о том, как совместить духовный путь с повседневными заботами..."
              href="/lessons"
              delay="0.1s"
              image="/098.jpg"
            />
            <TeachingCard
              tag="Шлока дня"
              title="Бг. 9.22 — Обещание Кришны своим преданным"
              excerpt="«Тем, кто всегда поклоняется Мне с любовью и преданностью, Я дарую то, чего им не хватает...»"
              href="/lessons"
              delay="0.2s"
              image="/077.jpg"
            />
          </div>

          <div className="text-center mt-12">
            <Link
              href="/lessons"
              className="reveal inline-flex items-center gap-3 px-8 py-4 bg-saffron-500 hover:bg-saffron-400 text-ivory-50 font-sans text-sm tracking-wide rounded-full transition-all duration-300 shadow-lg shadow-saffron-900/20"
            >
              Все материалы
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ PATHS OF SERVICE ════════════════════════════════════ */}
      <section className="bg-dharma-900 py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <p className="reveal font-sans text-xs tracking-[0.2em] text-saffron-400 uppercase mb-3">
              Паломничества и служение
            </p>
            <h2 className="reveal font-serif text-4xl sm:text-5xl text-ivory-100 mb-6" style={{ transitionDelay: '0.1s' }}>
              Пути Служения
            </h2>
            <p className="reveal font-sans text-base text-ivory-200/60 leading-relaxed mb-8" style={{ transitionDelay: '0.2s' }}>
              Хришикеш Махарадж регулярно совершает паломничества по священным местам и посещает общины преданных. Вы можете присоединиться к его маршруту или найти сатсанг в вашем городе.
            </p>
            <div className="reveal flex flex-col sm:flex-row gap-4" style={{ transitionDelay: '0.3s' }}>
              <Link
                href="/service"
                className="px-7 py-3.5 border border-gold-400/50 text-gold-300 hover:text-gold-200 font-sans text-sm tracking-wide rounded-full transition-all hover:bg-gold-400/5"
              >
                Карта перемещений
              </Link>
              <Link
                href="/service#schedule"
                className="px-7 py-3.5 bg-saffron-500/80 hover:bg-saffron-500 text-ivory-50 font-sans text-sm tracking-wide rounded-full transition-all"
              >
                Расписание сатсангов
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="reveal grid grid-cols-2 gap-4" style={{ transitionDelay: '0.2s' }}>
            {[
              { num: '12+',  label: 'стран присутствия' },
              { num: '300+', label: 'лекций и эфиров' },
              { num: '15+',  label: 'лет служения' },
              { num: '∞',    label: 'любви к Кришне' },
            ].map(({ num, label }) => (
              <div key={label} className="bg-white/5 border border-gold-400/15 rounded-xl p-6 text-center">
                <p className="font-serif text-4xl text-gold-400 mb-1">{num}</p>
                <p className="font-sans text-xs text-ivory-200/50 tracking-wide">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ══════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-saffron-600 to-saffron-800 py-6 pb-0 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0 items-end">
          {/* Left — Photo */}
          <div className="reveal flex justify-center lg:justify-start order-1 lg:order-1" style={{ transitionDelay: '0.2s' }}>
            <img
              src="/image_4.png"
              alt="Шрила Хришикеш Махарадж"
              className="w-72 sm:w-96 lg:w-[400px] xl:w-[440px] h-auto object-contain"
            />
          </div>

          {/* Right — Text */}
          <div className="text-center lg:text-left order-2 lg:order-2 my-auto">
            <p className="reveal sanskrit text-3xl text-gold-200 mb-4">Харе Кришна</p>
            <h2 className="reveal font-serif text-4xl sm:text-5xl text-ivory-50 mb-6" style={{ transitionDelay: '0.1s' }}>
              Начните свой путь
            </h2>
            <p className="reveal font-sans text-base text-ivory-100/70 leading-relaxed mb-8" style={{ transitionDelay: '0.2s' }}>
              Подпишитесь на Telegram-канал Гурудева, чтобы получать ежедневные уроки, шлоки и объявления о предстоящих эфирах.
            </p>
            <div className="reveal flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" style={{ transitionDelay: '0.3s' }}>
              <Link
                href="/contacts"
                className="px-8 py-4 bg-ivory-100 text-saffron-700 font-sans text-sm tracking-wide rounded-full hover:bg-white transition-all duration-300 shadow-lg shadow-saffron-900/20"
              >
                Связаться с нами
              </Link>
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-ivory-100/40 text-ivory-100 font-sans text-sm tracking-wide rounded-full hover:bg-white/10 transition-all duration-300"
              >
                ✈ Telegram канал
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
