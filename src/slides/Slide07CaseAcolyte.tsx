import { motion } from 'framer-motion'
import { Trophy, TrendingUp, Clock, CheckCircle, Users, MessageSquare, Zap } from 'lucide-react'

const metrics = [
  { value: '88%', label: 'диалогов решаются без участия человека', icon: MessageSquare, color: 'text-emerald-400' },
  { value: '100%', label: 'ответов по каталогу — только факты', icon: CheckCircle, color: 'text-sky-400' },
  { value: '24/7', label: 'работа без перерывов и выходных', icon: Clock, color: 'text-purple-400' },
]

const beforeAfter = {
  before: [
    'Перегрузка операторов',
    'Задержки ответов',
    'Разное качество консультаций',
    'Потеря клиентов вечером',
  ],
  after: [
    'Цифровой отдел ведёт клиентов',
    'Мгновенные ответы 24/7',
    'Единый стандарт качества',
    'Конверсия интереса в заказ',
  ],
}

export default function Slide07CaseAcolyte() {
  return (
    <div className="min-h-full w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center relative overflow-hidden pb-24">
      {/* Background success glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 mb-6">
            <Trophy className="w-4 h-4" />
            <span className="text-sm font-medium">Главный кейс</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Кейс «Аколит» — Online Retail
          </h2>
          <p className="text-xl text-slate-400">
            Результаты внедрения мультиагентной системы
          </p>
        </motion.div>

        {/* Main metric */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-10"
        >
          <div className="relative px-12 py-8 rounded-3xl bg-gradient-to-r from-emerald-500/10 via-emerald-500/20 to-emerald-500/10 border border-emerald-500/30">
            <div className="text-center">
              <div className="text-7xl md:text-8xl font-bold text-emerald-400 mb-2">88%</div>
              <div className="text-xl text-white">диалогов решаются без участия человека</div>
            </div>
            {/* Glow */}
            <div className="absolute -inset-2 bg-emerald-500/10 rounded-3xl blur-2xl -z-10" />
          </div>
        </motion.div>

        {/* Metrics row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6 mb-10"
        >
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <div key={index} className="text-center p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50">
                <Icon className={`w-8 h-8 ${metric.color} mx-auto mb-3`} />
                <div className={`text-3xl font-bold ${metric.color} mb-1`}>{metric.value}</div>
                <div className="text-sm text-slate-400">{metric.label}</div>
              </div>
            )
          })}
        </motion.div>

        {/* Before/After */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Before */}
          <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-sm font-medium">
                Было
              </div>
            </div>
            <ul className="space-y-3">
              {beforeAfter.before.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-400">
                  <span className="w-5 h-5 flex items-center justify-center text-red-400">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-medium">
                Стало
              </div>
            </div>
            <ul className="space-y-3">
              {beforeAfter.after.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Key value */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-sky-500/10 border border-sky-500/20">
            <Zap className="w-5 h-5 text-sky-400" />
            <span className="text-sky-400 font-medium">
              Блокировка галлюцинаций: нашёл в источнике → вернул, не нашёл → ERROR_NOT_FOUND
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
