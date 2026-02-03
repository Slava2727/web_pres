import { motion } from 'framer-motion'
import { Rocket, Package, Users, Building2, ArrowRight, Calendar, Clock, CheckCircle } from 'lucide-react'

const formats = [
  {
    icon: Package,
    title: 'Платформа + Пакет запуска',
    description: 'Мы настраиваем, обучаем, запускаем. Вы пользуетесь.',
    highlight: 'Гарантия результата',
    color: 'from-sky-500 to-blue-600',
  },
  {
    icon: Users,
    title: 'ИИ-трансформация',
    description: 'Выделенный специалист ведёт проект, постоянно улучшает агентов.',
    highlight: 'Для крупных каталогов',
    color: 'from-purple-500 to-pink-600',
  },
  {
    icon: Building2,
    title: 'Enterprise',
    description: 'Кастомные решения, установка в контур, сложные интеграции.',
    highlight: 'Индивидуальная оценка',
    color: 'from-amber-500 to-orange-600',
  },
]

const timeline = [
  { time: '1-3 дня', label: 'Простой агент' },
  { time: 'от 2 недель', label: 'Мультиагентная система' },
]

export default function Slide11CTA() {
  return (
    <div className="min-h-full w-full bg-gradient-to-br from-white via-slate-50 to-slate-100 flex items-center justify-center relative overflow-hidden pb-24">
      {/* Background gradient accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 mb-6">
            <Rocket className="w-4 h-4" />
            <span className="text-sm font-medium">Как начать</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Форматы запуска
          </h2>
          <p className="text-xl text-slate-600">
            От самостоятельного до «под ключ»
          </p>
        </motion.div>

        {/* Formats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-10"
        >
          {formats.map((format, index) => {
            const Icon = format.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="relative group"
              >
                <div className="h-full p-6 rounded-2xl bg-white/80 border border-slate-200/80 hover:border-slate-300 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/5">
                  {/* Icon with gradient bg */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${format.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{format.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{format.description}</p>
                  
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                    <CheckCircle className="w-3 h-3" />
                    {format.highlight}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-8 mb-10"
        >
          {timeline.map((item, index) => (
            <div key={index} className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/80 border border-slate-200/80">
              <Clock className="w-5 h-5 text-sky-400" />
              <div>
                <div className="text-xl font-bold text-slate-900">{item.time}</div>
                <div className="text-sm text-slate-600">{item.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center gap-6 p-8 rounded-3xl bg-gradient-to-r from-sky-500/10 via-purple-500/10 to-pink-500/10 border border-sky-500/20">
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6 text-sky-400" />
              <h3 className="text-2xl font-bold text-slate-900">Следующий шаг</h3>
            </div>
            <p className="text-slate-600 max-w-md">
              Демо-встреча для разбора вашего кейса и обсуждения оптимального формата внедрения
            </p>
            <button className="group flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 to-purple-600 text-white font-semibold text-lg hover:shadow-lg hover:shadow-sky-500/25 transition-all duration-300 hover:scale-105">
              <span>Запланировать демо</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-sm text-slate-600">
              naimi.ai • Цифровые сотрудники для вашего бизнеса
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
