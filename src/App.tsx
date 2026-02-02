import { useState, useEffect, useCallback } from 'react'
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

const slides = [
  Slide01Title,
  Slide02Problem,
  Slide03Solution,
  Slide04Architecture,
  Slide05SalesAgent,
  Slide06ServiceAgent,
  Slide07CaseAcolyte,
  Slide08Technology,
  Slide09Integrations,
  Slide10Security,
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

  const CurrentSlideComponent = slides[currentSlide]

  return (
    <div className="h-screen w-screen bg-slate-950 overflow-hidden relative">
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
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between px-8 py-6 bg-gradient-to-t from-black/50 to-transparent">
          {/* Left side: First/Previous */}
          <div className="flex items-center gap-2">
            <button
              onClick={goToFirst}
              disabled={currentSlide === 0}
              className="p-3 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 group"
              title="В начало (Home)"
            >
              <ChevronsLeft className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="p-3 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 group"
              title="Назад (←)"
            >
              <ChevronLeft className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
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
                    : 'w-2 h-2 bg-white/30 hover:bg-white/50'
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
              className="p-3 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 group"
              title="Вперёд (→)"
            >
              <ChevronRight className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={goToLast}
              disabled={currentSlide === slides.length - 1}
              className="p-3 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 group"
              title="В конец (End)"
            >
              <ChevronsRight className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Slide counter */}
      <div className="absolute top-6 right-8 z-50">
        <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/70 text-sm font-medium">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>
    </div>
  )
}

export default App
