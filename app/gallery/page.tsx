'use client'
import { useState, useEffect } from 'react'

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

const photos = [
  { id: 1, caption: 'Фото 1', location: '', src: '/1.jpg' },
  { id: 2, caption: 'Фото 2', location: '', src: '/2.jpg' },
  { id: 3, caption: 'Фото 3', location: '', src: '/3.jpg' },
  { id: 11, caption: 'Фото 11', location: '', src: '/11.jpg' },
  { id: 4, caption: 'Фото 4', location: '', src: '/4.jpg' },
  { id: 5, caption: 'Фото 5', location: '', src: '/5.jpg' },
  { id: 6, caption: 'Фото 6', location: '', src: '/6.jpg' },
  { id: 7, caption: 'Фото 7', location: '', src: '/7.jpg' },
  { id: 8, caption: 'Фото 8', location: '', src: '/8.jpg' },
  { id: 9, caption: 'Фото 9', location: '', src: '/9.jpg' },
  { id: 10, caption: 'Фото 10', location: '', src: '/10.jpg' },
]

const videos = [
  { id: 1, title: 'Говинда Махарадж — последние наставления', duration: '28:14' },
  { id: 2, title: 'Навадвипа-дхама: паломничество 2023', duration: '15:40' },
  { id: 3, title: 'Сатсанг в Москве — Бхагавад-гита 18.66', duration: '1:24:07' },
  { id: 4, title: 'Вриндаван — сердце преданного', duration: '22:30' },
]

function PhotoCard({ photo }: { photo: typeof photos[0] }) {
  return (
    <div className="reveal card-hover rounded-xl overflow-hidden group relative bg-white">
      <img src={photo.src} alt={photo.caption} className="w-full h-auto object-contain" />
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
                <div key={p.id} style={{ transitionDelay: `${i * 0.05}s` }}>
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
