import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dharma-900 border-t border-gold-500/20 text-ivory-200/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full border border-gold-400/60 flex items-center justify-center text-gold-400 text-lg">
                ॐ
              </div>
              <p className="font-serif text-ivory-100 text-base">Хришикеш Махарадж</p>
            </div>
            <p className="font-sans text-sm leading-relaxed text-ivory-200/50">
              Ученик и представитель Шрилы Говинды Махараджа. Миссия SCSM.
            </p>
            <p className="font-serif italic text-gold-400/70 text-sm mt-4">
              сарва-дхарман паритйаджйа
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-ivory-100 text-base mb-4">Разделы</h4>
            <ul className="space-y-2 font-sans text-sm">
              {[
                ['/', 'Главная'],
                ['/parampara', 'Гуру Парампара'],
                ['/lessons', 'Уроки Бхакти'],
                ['/gallery', 'Галерея'],
                ['/service', 'Пути Служения'],
                ['/contacts', 'Контакты'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-gold-400 transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-serif text-ivory-100 text-base mb-4">Связь</h4>
            <ul className="space-y-3 font-sans text-sm">
              <li>
                <a href="https://t.me/" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 hover:text-gold-400 transition-colors">
                  <span className="text-base">✈</span> Telegram канал
                </a>
              </li>
              <li>
                <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 hover:text-gold-400 transition-colors">
                  <span className="text-base">▶</span> YouTube
                </a>
              </li>
              <li>
                <a href="https://vk.com/" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 hover:text-gold-400 transition-colors">
                  <span className="text-base">◈</span> ВКонтакте
                </a>
              </li>
            </ul>
          </div>

          {/* Donate */}
          <div>
            <h4 className="font-serif text-ivory-100 text-base mb-4">Поддержка</h4>
            <p className="font-sans text-sm leading-relaxed mb-4 text-ivory-200/50">
              Ваше пожертвование помогает распространять духовное знание.
            </p>
            <Link
              href="/contacts#donate"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold-500/60 text-gold-400 text-sm font-sans hover:bg-gold-400/10 transition-all"
            >
              🪷 Пожертвовать
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
