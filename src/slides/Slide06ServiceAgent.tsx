import { motion } from 'framer-motion'
import { HeadphonesIcon, Package, Camera, User, Clock, CheckCircle } from 'lucide-react'

const features = [
  {
    icon: Package,
    title: '«Где мой заказ?»',
    description: 'Автоматический поиск статуса в CRM и ответ клиенту без участия человека',
    stat: '~80%',
    statLabel: 'таких запросов',
  },
  {
    icon: Camera,
    title: 'Работа с претензиями',
    description: 'Первичный скрининг (брак, возврат), сбор фото/видео, оформление заявки',
    stat: '3 мин',
    statLabel: 'среднее время',
  },
  {
    icon: User,
    title: 'Идентификация',
    description: 'Если клиент пишет с другого номера — агент найдёт профиль в базе',
    stat: '100%',
    statLabel: 'поиск в CRM',
  },
]

const workflow = [
  { step: 1, text: 'Клиент пишет запрос', icon: '💬' },
  { step: 2, text: 'Агент определяет тип', icon: '🔍' },
  { step: 3, text: 'Поиск данных в CRM', icon: '📊' },
  { step: 4, text: 'Готовый ответ клиенту', icon: '✅' },
]

export default function Slide06ServiceAgent() {
  return (
    <div className="min-h-full w-full bg-gradient-to-br from-white via-slate-50 to-slate-100 flex items-center justify-center relative overflow-hidden pb-24">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/5 to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6">
            <HeadphonesIcon className="w-4 h-4" />
            <span className="text-sm font-medium">Роль 2</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Сервисный агент
          </h2>
          <p className="text-xl text-slate-600">
            Забота о клиенте и разгрузка линии поддержки
          </p>
        </motion.div>

        {/* Workflow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-2 mb-10"
        >
          {workflow.map((item, index) => (
            <div key={index} className="flex items-center">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-slate-200/80">
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm text-slate-700">{item.text}</span>
              </div>
              {index < workflow.length - 1 && (
                <div className="w-8 h-px bg-gradient-to-r from-blue-500/50 to-blue-500/50 mx-2" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="p-6 rounded-2xl bg-white/80 border border-slate-200/80 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/10">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-400">{feature.stat}</div>
                    <div className="text-xs text-slate-600">{feature.statLabel}</div>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom benefit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex items-center justify-center gap-6"
        >
          <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <Clock className="w-6 h-6 text-blue-400" />
            <div>
              <div className="text-slate-900 font-medium">Снижение операционных костов</div>
              <div className="text-sm text-slate-600">Типовые вопросы закрываются автоматически</div>
            </div>
          </div>
          <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20">
            <CheckCircle className="w-6 h-6 text-emerald-400" />
            <div>
              <div className="text-slate-900 font-medium">Стабильное качество 24/7</div>
              <div className="text-sm text-slate-600">Одинаково правильно отвечает всегда</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
