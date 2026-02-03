import { motion } from 'framer-motion'
import { Sparkles, Users, Wand2, DatabaseZap } from 'lucide-react'

const theses = [
  {
    icon: Users,
    text: 'Группа ИИ-сотрудников со специализацией',
  },
  {
    icon: Wand2,
    text: 'Усиливает вашу команду',
  },
  {
    icon: DatabaseZap,
    text: 'ИИ на базе ваших данных, с доступом к СРМ',
  },
]

export default function Slide03Solution() {
  return (
    <div className="min-h-full w-full bg-slate-50 flex items-stretch justify-center relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[70vh] items-stretch">
          {/* Left zone */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-500 w-fit mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Решение</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              <span className="gradient-text">Ваш новый цифровой департамент</span>
            </h2>
          </motion.div>

          {/* Right zone */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-sm p-8 md:p-10 flex flex-col justify-center"
          >
            <div className="space-y-8">
              {theses.map((t, idx) => {
                const Icon = t.icon
                return (
                  <div key={idx} className="flex items-center gap-5">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 border border-sky-500/15 flex-shrink-0">
                      <Icon className="h-6 w-6 text-sky-500" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-slate-900 leading-snug">{t.text}</h3>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
