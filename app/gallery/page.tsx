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

const photos = [
  { id: 1, caption: 'Навадвипа-дхама', location: 'Индия', aspect: 'tall' },
  { id: 2, caption: 'Сатсанг в Москве', location: 'Россия', aspect: 'wide' },
  { id: 3, caption: 'Паломничество', location: 'Вриндаван', aspect: 'square' },
  { id: 4, caption: 'Шри Чайтанья Сарасват Матх', location: 'Навадвипа', aspect: 'wide' },
  { id: 5, caption: 'Лекция', location: 'Санкт-Петербург', aspect: 'square' },
  { id: 6, caption: 'Пуджа', location: 'Индия', aspect: 'tall' },
  { id: 7, caption: 'С преданными', location: 'Киев', aspect: 'square' },
  { id: 8, caption: 'Майяпур', location: 'Индия', aspect: 'wide' },
  { id: 9, caption: 'Арчана', location: 'Матх', aspect: 'square' },
]

const videos = [
  { id: 1, title: 'Говинда Махарадж — последние наставления', duration: '28:14' },
  { id: 2, title: 'Навадвипа-дхама: паломничество 2023', duration: '15:40' },
  { id: 3, title: 'Сатсанг в Москве — Бхагавад-гита 18.66', duration: '1:24:07' },
  { id: 4, title: 'Вриндаван — сердце преданного', duration: '22:30' },
]

function PhotoCard({ photo }: { photo: typeof photos[0] }) {
  const heights: Record<string, string> = {
    tall:   'h-80',
    wide:   'h-44',
    square: 'h-56',
  }

  return (
    <div className="reveal card-hover rounded-xl overflow-hidden group relative">
      <div className={`img-placeholder ${heights[photo.aspect]} w-full`}>
        <div className="flex flex-col items-center gap-1 opacity-30">
          <span className="text-3xl">🪷</span>
          <span className="text-xs">фото</span>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-dharma-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
        <p className="font-serif text-ivory-100 text-sm">{photo.caption}</p>
        <p className="font-sans text-xs text-gold-300/70">{photo.location}</p>
      </div>
    </div>
  )
}

export default function GalleryPage() {
  useReveal()
  const [tab, setTab] = useState<'photos' | 'videos'>('photos')

  return (
    <>
      <section className="hero-gradient pt-36 pb-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-xs tracking-[0.25em] text-gold-400/70 uppercase mb-4">Моменты служения</p>
          <h1 className="font-serif text-5xl sm:text-6xl text-ivory-100 mb-4">Галерея</h1>
          <div className="w-16 h-px bg-gold-400/50 mx-auto my-6" />
          <p className="font-sans text-base text-ivory-200/60 max-w-md mx-auto">
            Фотографии и видео с паломничеств, лекций, пудж и встреч с преданными по всему миру.
          </p>
        </div>
      </section>

      <section className="bg-ivory-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-12">
            {(['photos', 'videos'] as const).map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-8 py-3 rounded-full font-sans text-sm tracking-wide transition-all ${
                  tab === t
                    ? 'bg-saffron-500 text-ivory-50 shadow-md shadow-saffron-200'
                    : 'bg-white border border-gold-200/60 text-dharma-600 hover:border-gold-400/40'
                }`}
              >
                {t === 'photos' ? '📸 Фотографии' : '▶ Видео'}
              </button>
            ))}
          </div>

          {/* Photo masonry */}
          {tab === 'photos' && (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {photos.map((p, i) => (
                <div key={p.id} className="break-inside-avoid" style={{ transitionDelay: `${i * 0.05}s` }}>
                  <PhotoCard photo={p} />
                </div>
              ))}
            </div>
          )}

          {/* Video grid */}
          {tab === 'videos' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {videos.map((v, i) => (
                <div
                  key={v.id}
                  className="reveal card-hover bg-white/60 border border-gold-200/50 rounded-2xl overflow-hidden"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="img-placeholder h-48 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-saffron-500/80 flex items-center justify-center text-white text-xl hover:bg-saffron-400/90 transition-colors cursor-pointer">
                        ▶
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-dharma-900/70 text-ivory-100 text-xs font-sans px-2 py-1 rounded">
                      {v.duration}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-lg text-dharma-900 leading-snug">{v.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          )}

          <p className="reveal text-center mt-12 font-sans text-sm text-dharma-400">
            Больше материалов — в{' '}
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-saffron-500 hover:underline">
              YouTube канале
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
