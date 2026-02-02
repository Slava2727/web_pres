import { motion } from 'framer-motion'
import { Plug, MessageCircle, Database, Settings, Users, CheckCircle } from 'lucide-react'

const channels = [
  { name: 'Telegram', color: 'bg-sky-500' },
  { name: 'WhatsApp', color: 'bg-emerald-500' },
  { name: 'RetailCRM', color: 'bg-orange-500' },
  { name: 'Bitrix24', color: 'bg-blue-500' },
  { name: 'Jivo', color: 'bg-yellow-500' },
  { name: 'Avito', color: 'bg-purple-500' },
]

const mcpActions = [
  {
    icon: '📋',
    action: 'Создаёт задачи в CRM',
    example: 'Задача «Горячий лид» для менеджера',
  },
  {
    icon: '📦',
    action: 'Меняет статус заказа',
    example: 'Обновление статуса доставки',
  },
  {
    icon: '🔒',
    action: 'Бронирует товар',
    example: 'Резерв позиции на складе',
  },
  {
    icon: '💳',
    action: 'Формирует ссылку на оплату',
    example: 'Ссылка с UTM для аналитики',
  },
]

export default function Slide09Integrations() {
  return (
    <div className="min-h-full w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center relative overflow-hidden pb-24">
      {/* Background connection lines */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full">
          <defs>
            <linearGradient id="connGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-6">
            <Plug className="w-4 h-4" />
            <span className="text-sm font-medium">Интеграции</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Встраиваемся в ваш IT-ландшафт
          </h2>
          <p className="text-xl text-slate-400">
            Готовые коннекторы и MCP для управления вашими системами
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Channels */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50">
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="w-6 h-6 text-sky-400" />
                <h3 className="text-xl font-semibold text-white">Каналы связи</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                {channels.map((channel, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-slate-600 transition-colors"
                  >
                    <div className={`w-3 h-3 rounded-full ${channel.color}`} />
                    <span className="text-slate-300 text-sm font-medium">{channel.name}</span>
                  </motion.div>
                ))}
              </div>

              <p className="text-sm text-slate-500 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                И ещё десятки каналов через партнёрские интеграции
              </p>
            </div>
          </motion.div>

          {/* Right: MCP */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-sky-500/10 border border-purple-500/20">
              <div className="flex items-center gap-3 mb-6">
                <Settings className="w-6 h-6 text-purple-400" />
                <div>
                  <h3 className="text-xl font-semibold text-white">MCP — Model Context Protocol</h3>
                  <p className="text-sm text-slate-400">ИИ не просто «болтает», он управляет системами</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {mcpActions.map((action, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50"
                  >
                    <span className="text-2xl">{action.icon}</span>
                    <div>
                      <div className="text-white font-medium">{action.action}</div>
                      <div className="text-xs text-slate-500">{action.example}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom: Sufler mode */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8"
        >
          <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-amber-500/10">
                <Users className="w-6 h-6 text-amber-400" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-white mb-1">Режим суфлёра</h4>
                <p className="text-slate-400 text-sm">
                  Для B2B продаж: ИИ подсказывает менеджеру ответ, менеджер правит и отправляет. 
                  Идеально для сложных переговоров.
                </p>
              </div>
              <div className="px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium">
                Beta
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
