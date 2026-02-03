import { motion } from 'framer-motion'
import { AlertTriangle, Clock, DollarSign, Users, TrendingDown, TrendingUp } from 'lucide-react'

const problems = [
  {
    icon: Clock,
    title: 'Теряем самых целевых',
    lead: 'Конверсия падает, если не отвечаем быстро',
    points: [
      'Сайт работает 24/7, а ваши сотрудники — с 9 до 18',
      'Пик обращений ≠ пик доступности операторов',
    ],
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/20',
  },
  {
    icon: DollarSign,
    title: 'Дорогие люди на дешевых задачах',
    lead: 'Квалифицированные продавцы тратят до 70% времени на типовые вопросы',
    points: ['«Где мой заказ?» и «До скольки работаете?»'],
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/20',
  },
  {
    icon: Users,
    title: 'Человеческий фактор',
    points: ['Забывают ап-сейл или рассказать про акцию', 'Качество общения «по настроению»'],
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/20',
  },
  {
    icon: TrendingUp,
    title: 'Сложно масштабироваться',
    points: [
      'Распродажа, сезон или удачная кампания',
      'Но как быстро нанять и обучить людей?',
    ],
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function Slide02Problem() {
  return (
    <div className="min-h-full w-full bg-gradient-to-br from-white via-slate-50 to-slate-100 flex items-center justify-center relative overflow-hidden pb-24">
      {/* Background effect - leaking bucket visualization */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/30 via-orange-500/20 to-transparent rounded-t-full" />
        <motion.div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-32 bg-gradient-to-b from-red-500/50 to-transparent"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-red-500/20">
              <AlertTriangle className="w-6 h-6 text-red-400" />
            </div>
            <span className="text-red-400 font-medium uppercase tracking-wider text-sm">Проблематика</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Теряем выручку и раздуваем затраты
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl">
            Где E-commerce теряет деньги прямо сейчас?
          </p>
        </motion.div>

        {/* Problem cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 gap-6"
        >
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <motion.div
                key={index}
                variants={item}
                className={`p-6 rounded-2xl ${problem.bgColor} border ${problem.borderColor} backdrop-blur-sm hover:scale-[1.02] transition-transform duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${problem.bgColor}`}>
                    <Icon className={`w-6 h-6 ${problem.color}`} />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      {problem.lead}
                    </p>
                    <ul className="text-slate-600 leading-relaxed space-y-1">
                      {problem.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex gap-2">
                          <span className="text-slate-400">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom stat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex items-center justify-center gap-4 text-slate-600"
        >
          <TrendingDown className="w-5 h-5 text-red-400" />
          <span>Каждый из этих факторов снижает конверсию и увеличивает расходы</span>
        </motion.div>
      </div>
    </div>
  )
}
