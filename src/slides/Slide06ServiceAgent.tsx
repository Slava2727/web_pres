import { motion } from 'framer-motion'
import { Database, Settings } from 'lucide-react'

import serviceAgentOrder from '../assets/service_agent_order.jpeg'
import serviceAgentGift from '../assets/service_agent_gift.jpeg'
import serviceAgentDelivery from '../assets/service_agent_delivery.jpeg'
import serviceAgentQuestion from '../assets/service_agent_question.jpeg'

const roles = [
  {
    image: serviceAgentOrder,
    imageAlt: 'Заказы',
    title: 'Управление заказами',
    tasks: ['Информирование о статусе', 'Отмена и изменение заказа', 'Уточнение деталей'],
  },
  {
    image: serviceAgentGift,
    imageAlt: 'Лояльность',
    title: 'Программа лояльности',
    tasks: ['Акции и спецпредложения', 'Бонусы и скидки', 'Условия участия'],
  },
  {
    image: serviceAgentDelivery,
    imageAlt: 'Доставка',
    title: 'Курьерские службы',
    tasks: ['Статус доставки', 'Вопросы по логистике', 'Запросы в службу доставки'],
  },
  {
    image: serviceAgentQuestion,
    imageAlt: 'Общие вопросы',
    title: 'Общие вопросы',
    tasks: ['Способы оплаты', 'Условия работы', 'Информация о магазине'],
  },
]

const capabilities = [
  { icon: Database, text: 'Собственная база знаний и регламент для каждой роли' },
  { icon: Settings, text: 'Интеграция с CRM и внешними системами' },
]

export default function Slide06ServiceAgent() {
  return (
    <div className="min-h-full w-full bg-gradient-to-br from-white via-slate-50 to-slate-100 flex items-center justify-center relative overflow-hidden pb-24">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/5 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Сервисные агенты
          </h2>
          <p className="text-xl text-slate-600">
            Специализированные роли для разных типов обращений
          </p>
        </motion.div>

        {/* Roles Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
        >
          {roles.map((role, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="rounded-3xl bg-white/80 border border-slate-200/80 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 overflow-hidden"
              >
                <div className="relative h-28 md:h-32">
                  <img
                    src={role.image}
                    alt={role.imageAlt}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/10 to-white/80" />
                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-white/0 to-white/90" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-slate-900 mb-4">{role.title}</h4>
                  <ul className="space-y-3">
                    {role.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="text-base text-slate-600 flex items-start gap-2">
                        <span className="text-blue-400 mt-1.5">•</span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {capabilities.map((cap, index) => {
            const Icon = cap.icon
            return (
              <div
                key={index}
                className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/25 shadow-sm"
              >
                <Icon className="w-6 h-6 text-blue-500" />
                <span className="text-slate-800 text-base md:text-lg font-semibold">
                  {cap.text}
                </span>
              </div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}
