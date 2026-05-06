'use client'
import { useEffect } from 'react'

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

const pilgrimages = [
  {
    place: 'Навадвипа · Майяпур',
    country: 'Индия',
    desc: 'Главная Дхама, место явления Господа Чайтаньи. Храм Шри Чайтанья Сарасват Матх — самое священное место для наших учителей.',
    emoji: '🌺',
    highlight: true,
  },
  {
    place: 'Вриндаван',
    country: 'Индия',
    desc: 'Вечная обитель Господа Кришны. Паломничество по 12 лесам Вриндавана, Говардхан-парикрама.',
    emoji: '🦚',
    highlight: false,
  },
  {
    place: 'Джаганнатх Пури',
    country: 'Индия',
    desc: 'Дхама Господа Джаганнатха — место, связанное с Господом Чайтаньей и Его вечными лилами.',
    emoji: '🌊',
    highlight: false,
  },
  {
    place: 'Москва · СПб',
    country: 'Россия',
    desc: 'Регулярные визиты Махараджа, лекции и сатсанги. Встречи с преданными русской общины.',
    emoji: '❄️',
    highlight: false,
  },
]

const schedule = [
  { month: 'Январь – Февраль', place: 'Навадвипа-дхама', type: 'Паломничество', status: 'upcoming' },
  { month: 'Март',             place: 'Москва',           type: 'Сатсанг · лекция', status: 'upcoming' },
  { month: 'Апрель',           place: 'Вриндаван',        type: 'Говардхан-парикрама', status: 'upcoming' },
  { month: 'Май',              place: 'Санкт-Петербург',  type: 'Сатсанг · Q&A', status: 'upcoming' },
  { month: 'Июнь – Июль',      place: 'Майяпур',          type: 'Летний лагерь', status: 'upcoming' },
  { month: 'Сентябрь',         place: 'Пури',             type: 'Паломничество', status: 'upcoming' },
  { month: 'Декабрь',          place: 'Навадвипа',        type: 'Годовой фестиваль', status: 'upcoming' },
]

export default function ServicePage() {
  useReveal()

  return (
    <>
      <section className="hero-gradient pt-36 pb-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-xs tracking-[0.25em] text-gold-400/70 uppercase mb-4">Паломничества и встречи</p>
          <h1 className="font-serif text-5xl sm:text-6xl text-ivory-100 mb-4">Пути Служения</h1>
          <div className="w-16 h-px bg-gold-400/50 mx-auto my-6" />
          <p className="font-sans text-base text-ivory-200/60 max-w-md mx-auto">
            Хришикеш Махарадж путешествует по священным местам и к преданным по всему миру. Присоединяйтесь.
          </p>
        </div>
      </section>

      {/* Pilgrimage locations */}
      <section className="bg-ivory-100 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="reveal font-serif text-4xl text-dharma-900 mb-3">Священные дхамы</h2>
            <p className="reveal font-sans text-sm text-dharma-500">Места паломничеств и служения</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pilgrimages.map((p, i) => (
              <div
                key={p.place}
                className={`reveal card-hover rounded-2xl p-7 border ${
                  p.highlight
                    ? 'bg-gradient-to-br from-saffron-50 to-ivory-100 border-saffron-200'
                    : 'bg-white/60 border-gold-200/50'
                }`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl flex-shrink-0 mt-1">{p.emoji}</span>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-serif text-xl text-dharma-900">{p.place}</h3>
                      {p.highlight && (
                        <span className="px-2 py-0.5 bg-saffron-500 text-ivory-50 rounded-full text-xs font-sans">
                          Главная дхама
                        </span>
                      )}
                    </div>
                    <p className="font-sans text-xs text-gold-600 tracking-wide mb-2">{p.country}</p>
                    <p className="font-sans text-sm text-dharma-600 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-dharma-800 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="reveal rounded-2xl overflow-hidden border border-gold-400/20" style={{ height: '360px', background: 'linear-gradient(135deg, #2D1A08 0%, #4A2D12 100%)' }}>
            <div className="h-full flex flex-col items-center justify-center gap-4">
              <div className="text-5xl text-gold-400/30">🗺</div>
              <p className="font-serif text-ivory-100/60 text-lg">Интерактивная карта перемещений</p>
              <p className="font-sans text-sm text-ivory-200/30 max-w-sm text-center">
                Вставьте Google Maps или Yandex Maps с отмеченными точками маршрута Махараджа
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="bg-ivory-100 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="reveal font-serif text-4xl text-dharma-900 mb-3">Расписание</h2>
            <p className="reveal font-sans text-sm text-dharma-500">Предстоящие визиты и паломничества</p>
          </div>

          <div className="space-y-4">
            {schedule.map((s, i) => (
              <div
                key={i}
                className="reveal card-hover flex items-center gap-5 bg-white/60 border border-gold-200/50 rounded-xl px-6 py-5"
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                <div className="w-2 h-2 rounded-full bg-saffron-400 flex-shrink-0" />
                <div className="w-40 flex-shrink-0">
                  <p className="font-sans text-xs text-gold-600 tracking-wide">{s.month}</p>
                </div>
                <div className="flex-1">
                  <p className="font-serif text-lg text-dharma-900">{s.place}</p>
                </div>
                <span className="hidden sm:inline-block px-3 py-1 bg-ivory-200 text-dharma-600 rounded-full text-xs font-sans">
                  {s.type}
                </span>
              </div>
            ))}
          </div>

          <p className="reveal text-center mt-8 font-sans text-xs text-dharma-400">
            Актуальное расписание — в Telegram-канале Гурудева
          </p>
        </div>
      </section>
    </>
  )
}
