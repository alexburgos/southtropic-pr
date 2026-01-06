import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export const Route = createFileRoute('/gallery')({
  component: GalleryPage,
})

const galleryImages = Array.from({ length: 23 }, (_, i) => {
  const num = i + 1
  return {
    webp: `/images/gallery/drone-and-cam-shot-${num}.webp`,
    jpg: `/images/gallery/drone-and-cam-shot-${num}.jpg`,
    num
  }
})

function GalleryPage() {
  const { t } = useTranslation()
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())
  const EAGER_LOAD_COUNT = 8

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1)
    }
  }

  const goToNext = () => {
    if (selectedImage !== null && selectedImage < galleryImages.length - 1) {
      setSelectedImage(selectedImage + 1)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowLeft') goToPrevious()
    if (e.key === 'ArrowRight') goToNext()
  }

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set(prev).add(index))
  }

  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage])

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <link rel="preload" as="image" href={galleryImages[0].webp} type="image/webp" fetchPriority="high" />
        <link rel="preload" as="image" href={galleryImages[0].jpg} fetchPriority="high" />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => {
            const isAboveFold = index < EAGER_LOAD_COUNT
            const isFirstImage = index === 0
            
            return (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden cursor-pointer bg-white/5 hover:bg-white/10 transition-colors duration-300"
                onClick={() => openLightbox(index)}
              >
                {!loadedImages.has(index) && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-white/20 border-t-white/80 rounded-full animate-spin" />
                  </div>
                )}
                <picture>
                  <source srcSet={image.webp} type="image/webp" />
                  <img
                    src={image.jpg}
                    alt={t('gallery.imageAlt', { number: image.num })}
                    loading={isAboveFold ? "eager" : "lazy"}
                    fetchPriority={isFirstImage ? "high" : undefined}
                    onLoad={() => handleImageLoad(index)}
                    className="w-full h-full object-cover transition-all duration-300 ease-out group-hover:scale-110"
                    style={{ 
                      opacity: loadedImages.has(index) ? 1 : 0
                    }}
                    width="400"
                    height="400"
                  />
                </picture>
              </div>
            )
          })}
        </div>
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white text-4xl font-light z-50 cursor-pointer"
            onClick={closeLightbox}
            aria-label="Close"
          >
            ×
          </button>

          {selectedImage > 0 && (
            <button
              className="absolute left-6 text-white/80 hover:text-white text-5xl font-light z-50 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
              aria-label="Previous"
            >
              ‹
            </button>
          )}

          {selectedImage < galleryImages.length - 1 && (
            <button
              className="absolute right-6 text-white/80 hover:text-white text-5xl font-light z-50 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              aria-label="Next"
            >
              ›
            </button>
          )}

          <div
            className="relative max-w-7xl max-h-[90vh] px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <picture>
              <source srcSet={galleryImages[selectedImage].webp} type="image/webp" />
              <img
                src={galleryImages[selectedImage].jpg}
                alt={t('gallery.imageAlt', { number: galleryImages[selectedImage].num })}
                className="max-w-full max-h-[90vh] object-contain"
                loading="eager"
              />
            </picture>
            {selectedImage > 0 && (
              <>
                <link rel="preload" as="image" href={galleryImages[selectedImage - 1].webp} type="image/webp" />
                <link rel="preload" as="image" href={galleryImages[selectedImage - 1].jpg} />
              </>
            )}
            {selectedImage < galleryImages.length - 1 && (
              <>
                <link rel="preload" as="image" href={galleryImages[selectedImage + 1].webp} type="image/webp" />
                <link rel="preload" as="image" href={galleryImages[selectedImage + 1].jpg} />
              </>
            )}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/80 text-sm">
              {t('gallery.imageCounter', { current: selectedImage + 1, total: galleryImages.length })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

