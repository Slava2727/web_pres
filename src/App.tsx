import { useState, useEffect, useCallback, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'

// Импорт всех слайдов
import Slide01Title from './slides/Slide01Title'
import Slide02Problem from './slides/Slide02Problem'
import Slide03Solution from './slides/Slide03Solution'
import Slide04Architecture from './slides/Slide04Architecture'
import Slide05SalesAgent from './slides/Slide05SalesAgent'
import Slide06ServiceAgent from './slides/Slide06ServiceAgent'
import Slide07CaseAcolyte from './slides/Slide07CaseAcolyte'
import Slide08Technology from './slides/Slide08Technology'
import Slide09Integrations from './slides/Slide09Integrations'
import Slide10Security from './slides/Slide10Security'
import Slide11CTA from './slides/Slide11CTA'
import Slide12AiTransformation from './slides/Slide12AiTransformation'

const slides = [
  Slide01Title,
  Slide02Problem,
  Slide03Solution,
  Slide04Architecture,
  Slide05SalesAgent,
  Slide06ServiceAgent,
  Slide09Integrations,
  Slide08Technology,
  Slide07CaseAcolyte,
  Slide10Security,
  Slide12AiTransformation,
  Slide11CTA,
]

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
}

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)
  const [showSwipeHint, setShowSwipeHint] = useState(false)
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null)

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slides.length) {
      setDirection(index > currentSlide ? 1 : -1)
      setCurrentSlide(index)
    }
  }, [currentSlide])

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setDirection(1)
      setCurrentSlide(prev => prev + 1)
    }
  }, [currentSlide])

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1)
      setCurrentSlide(prev => prev - 1)
    }
  }, [currentSlide])

  const goToFirst = useCallback(() => {
    if (currentSlide !== 0) {
      setDirection(-1)
      setCurrentSlide(0)
    }
  }, [currentSlide])

  const goToLast = useCallback(() => {
    if (currentSlide !== slides.length - 1) {
      setDirection(1)
      setCurrentSlide(slides.length - 1)
    }
  }, [currentSlide])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'Enter':
          nextSlide()
          break
        case 'ArrowLeft':
        case 'Backspace':
          prevSlide()
          break
        case 'Home':
          goToFirst()
          break
        case 'End':
          goToLast()
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide, goToFirst, goToLast])

  useEffect(() => {
    if (currentSlide !== 0) {
      setShowSwipeHint(false)
      return
    }

    setShowSwipeHint(true)
    const timeout = window.setTimeout(() => {
      setShowSwipeHint(false)
    }, 2500)

    return () => window.clearTimeout(timeout)
  }, [currentSlide])

  const CurrentSlideComponent = slides[currentSlide]
  const handleTouchStart = (event: React.TouchEvent) => {
    const touch = event.touches[0]
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now(),
    }
  }

  const handleTouchEnd = (event: React.TouchEvent) => {
    const start = touchStartRef.current
    if (!start) return

    const touch = event.changedTouches[0]
    const dx = touch.clientX - start.x
    const dy = touch.clientY - start.y
    const absDx = Math.abs(dx)
    const absDy = Math.abs(dy)
    const elapsed = Date.now() - start.time

    if (absDx > 60 && absDx > absDy * 1.2 && elapsed < 600) {
      if (dx < 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }

    touchStartRef.current = null
  }

  return (
    <div className="h-screen w-screen bg-slate-50 overflow-hidden relative">
      {/* Slide Container */}
      <div className="h-full w-full relative">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0 overflow-y-auto overflow-x-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-0 left-0 right-0 z-50 hidden md:block">
        <div className="flex items-center justify-between px-8 py-6 bg-gradient-to-t from-slate-100/90 to-transparent">
          {/* Left side: First/Previous */}
          <div className="flex items-center gap-2">
            <button
              onClick={goToFirst}
              disabled={currentSlide === 0}
              className="p-3 rounded-xl bg-white/70 border border-slate-200/80 backdrop-blur-sm hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 group"
              title="В начало (Home)"
            >
              <ChevronsLeft className="w-5 h-5 text-slate-900 group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="p-3 rounded-xl bg-white/70 border border-slate-200/80 backdrop-blur-sm hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 group"
              title="Назад (←)"
            >
              <ChevronLeft className="w-5 h-5 text-slate-900 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Center: Slide indicators */}
          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? 'w-8 h-2 bg-sky-400'
                    : 'w-2 h-2 bg-slate-400/40 hover:bg-slate-400/60'
                }`}
                title={`Слайд ${index + 1}`}
              />
            ))}
          </div>

          {/* Right side: Next/Last */}
          <div className="flex items-center gap-2">
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="p-3 rounded-xl bg-white/70 border border-slate-200/80 backdrop-blur-sm hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 group"
              title="Вперёд (→)"
            >
              <ChevronRight className="w-5 h-5 text-slate-900 group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={goToLast}
              disabled={currentSlide === slides.length - 1}
              className="p-3 rounded-xl bg-white/70 border border-slate-200/80 backdrop-blur-sm hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 group"
              title="В конец (End)"
            >
              <ChevronsRight className="w-5 h-5 text-slate-900 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile swipe hint (first slide only) */}
      <AnimatePresence>
        {showSwipeHint && (
          <motion.div
            className="absolute top-20 left-1/2 z-40 -translate-x-1/2 md:hidden pointer-events-none"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.35 }}
          >
            <div className="flex items-center gap-4 px-5 py-3 rounded-full bg-white/90 border border-slate-200/80 backdrop-blur-sm text-slate-700 text-base font-semibold shadow-md">
              <div className="relative h-6 w-20">
                <div className="absolute left-1/2 top-1/2 h-[2px] w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-slate-200/0 via-slate-300/70 to-slate-200/0" />
                <motion.div
                  className="absolute top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-white shadow-[0_4px_10px_rgba(15,23,42,0.25)] border border-slate-200"
                  animate={{ x: [4, 44, 4], scale: [1, 1.06, 1] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute top-1/2 h-7 w-7 -translate-y-1/2 rounded-full border border-slate-300/70"
                  animate={{ x: [2, 42, 2], opacity: [0, 0.45, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
              <span>Свайп →</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Navigation Controls */}
      <div className="absolute left-0 right-0 z-50 md:hidden bottom-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <div className="flex items-center justify-between px-4 pt-3 pb-3 bg-gradient-to-t from-slate-100/95 to-transparent">
          <button
            onClick={goToFirst}
            disabled={currentSlide === 0}
            className="p-2 rounded-lg bg-white/80 border border-slate-200/80 backdrop-blur-sm disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            title="В начало"
            aria-label="В начало"
          >
            <ChevronsLeft className="w-5 h-5 text-slate-900" />
          </button>
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-2 rounded-lg bg-white/80 border border-slate-200/80 backdrop-blur-sm disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            title="Назад"
            aria-label="Назад"
          >
            <ChevronLeft className="w-5 h-5 text-slate-900" />
          </button>
          <div className="px-3 py-1.5 rounded-full bg-white/80 border border-slate-200/80 backdrop-blur-sm text-slate-600 text-xs font-medium">
            {currentSlide + 1} / {slides.length}
          </div>
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="p-2 rounded-lg bg-white/80 border border-slate-200/80 backdrop-blur-sm disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            title="Вперёд"
            aria-label="Вперёд"
          >
            <ChevronRight className="w-5 h-5 text-slate-900" />
          </button>
          <button
            onClick={goToLast}
            disabled={currentSlide === slides.length - 1}
            className="p-2 rounded-lg bg-white/80 border border-slate-200/80 backdrop-blur-sm disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            title="В конец"
            aria-label="В конец"
          >
            <ChevronsRight className="w-5 h-5 text-slate-900" />
          </button>
        </div>
      </div>

      {/* Slide counter */}
      <div className="absolute top-6 right-8 z-50 hidden md:block">
        <div className="px-4 py-2 rounded-full bg-white/80 border border-slate-200/80 backdrop-blur-sm text-slate-600 text-sm font-medium">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>
    </div>
  )
}

export default App
