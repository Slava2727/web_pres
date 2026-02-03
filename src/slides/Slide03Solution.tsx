import { motion } from 'framer-motion'
import { Bot, MessageSquare, Users, ArrowRight, Sparkles, CheckCircle } from 'lucide-react'

const comparison = [
  {
    type: 'old',
    title: 'Обычный чат-бот',
    items: ['Кнопочное меню', 'Скриптовые ответы', '"Не понял вопрос"', 'Раздражает клиентов'],
    color: 'text-slate-500',
    bgColor: 'bg-white/70',
    borderColor: 'border-slate-200/80',
  },
  {
    type: 'new',
    title: 'Цифровой отдел Naimi',
    items: ['Живой диалог на естественном языке', 'Понимает контекст и намерения', 'Знает весь ассортимент', 'Работает по регламенту компании'],
    color: 'text-sky-400',
    bgColor: 'bg-sky-500/10',
    borderColor: 'border-sky-500/30',
  },
]

const keyPoints = [
  {
    icon: Users,
    title: 'Специализация',
    description: 'Группа узкопрофильных ИИ-агентов, а не один «бот-всезнайка»',
  },
  {
    icon: Bot,
    title: 'Компетенция',
    description: 'Работает по регламенту, знает ассортимент, имеет доступ к CRM и складу',
  },
  {
    icon: Sparkles,
    title: 'Бесшовность',
    description: 'Клиент не замечает разницы. При сомнениях — незаметная передача человеку',
  },
]

export default function Slide03Solution() {
  return (
    <div className="min-h-full w-full bg-gradient-to-br from-white via-slate-50 to-slate-100 flex items-center justify-center relative overflow-hidden pb-24">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-500/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Решение</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Это не чат-бот.
            <br />
            <span className="gradient-text">Это ваш новый цифровой департамент.</span>
          </h2>
        </motion.div>

        {/* Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row items-stretch justify-center gap-6 mb-12"
        >
          {comparison.map((item, index) => (
            <div key={index} className="flex-1 max-w-md">
              <div className={`h-full p-6 rounded-2xl ${item.bgColor} border ${item.borderColor}`}>
                <div className="flex items-center gap-3 mb-4">
                  {item.type === 'old' ? (
                    <MessageSquare className={`w-6 h-6 ${item.color}`} />
                  ) : (
                    <Bot className={`w-6 h-6 ${item.color}`} />
                  )}
                  <h3 className={`text-xl font-semibold ${item.type === 'new' ? 'text-slate-900' : 'text-slate-600'}`}>
                    {item.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {item.items.map((listItem, i) => (
                    <li key={i} className="flex items-center gap-3">
                      {item.type === 'new' ? (
                        <CheckCircle className="w-5 h-5 text-sky-400 flex-shrink-0" />
                      ) : (
                        <span className="w-5 h-5 flex items-center justify-center text-slate-400">✕</span>
                      )}
                      <span className={item.type === 'new' ? 'text-slate-700' : 'text-slate-600'}>
                        {listItem}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          
          {/* Arrow between cards (desktop) */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center">
            <ArrowRight className="w-8 h-8 text-sky-400" />
          </div>
        </motion.div>

        {/* Key points */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {keyPoints.map((point, index) => {
            const Icon = point.icon
            return (
              <div key={index} className="text-center p-6">
                <div className="inline-flex p-3 rounded-xl bg-sky-500/10 mb-4">
                  <Icon className="w-6 h-6 text-sky-400" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">{point.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{point.description}</p>
              </div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}
