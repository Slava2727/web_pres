import { motion } from 'framer-motion'
import { Bot, Package, HeadphonesIcon, Database } from 'lucide-react'

const subAgents = [
  {
    name: 'Агент консультант',
    description: 'Каталог, размеры, наличие',
    icon: Package,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
  },
  {
    name: 'Сервисный агент',
    description: 'Доставка, возврат, лояльность',
    icon: HeadphonesIcon,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
  },
  {
    name: 'CRM Агент',
    description: 'Клиенты, заказы, статусы',
    icon: Database,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
  },
]

export default function Slide04Architecture() {
  return (
    <div className="min-h-full w-full bg-gradient-to-br from-white via-slate-50 to-slate-100 flex items-center justify-center relative overflow-hidden pb-24">
      {/* Background connections visualization */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          {/* Animated connection lines would go here */}
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Мультиагентная система
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Каждый агент отвечает только за свою зону → нет галлюцинаций → удобнее управление
          </p>
        </motion.div>

        {/* Architecture diagram */}
        <div className="relative">
          {/* Orchestrator - Central */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="p-8 rounded-3xl bg-gradient-to-br from-sky-500/20 to-purple-500/20 border border-sky-500/30 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-sky-500 to-purple-500 shadow-lg shadow-sky-500/30">
                    <Bot className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Оркестратор</h3>
                    <p className="text-slate-600">Главный агент</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-sm text-slate-600">
                  <p>• Ведёт диалог с клиентом</p>
                  <p>• Понимает намерение</p>
                  <p>• Распределяет задачи</p>
                </div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-500/20 to-purple-500/20 rounded-3xl blur-2xl -z-10" />
            </div>
          </motion.div>

          {/* Connection arrows */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative mb-6 h-14"
          >
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 120" preserveAspectRatio="xMidYMin meet">
              <defs>
                <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5" />
                </linearGradient>
                <marker
                  id="arrowHead"
                  markerWidth="6"
                  markerHeight="6"
                  refX="5"
                  refY="3"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path d="M0,0 L6,3 L0,6 Z" fill="#38bdf8" fillOpacity="0.85" />
                </marker>
              </defs>
              <line x1="300" y1="10" x2="90" y2="110" stroke="url(#arrowGradient)" strokeWidth="2" strokeLinecap="butt" vectorEffect="non-scaling-stroke" markerEnd="url(#arrowHead)" />
              <line x1="300" y1="10" x2="300" y2="110" stroke="#38bdf8" strokeWidth="2.4" strokeLinecap="butt" vectorEffect="non-scaling-stroke" markerEnd="url(#arrowHead)" />
              <line x1="300" y1="10" x2="510" y2="110" stroke="url(#arrowGradient)" strokeWidth="2" strokeLinecap="butt" vectorEffect="non-scaling-stroke" markerEnd="url(#arrowHead)" />
            </svg>
          </motion.div>

          {/* Sub-agents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {subAgents.map((agent, index) => {
              const Icon = agent.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className={`p-6 rounded-2xl ${agent.bgColor} border ${agent.borderColor} hover:scale-105 transition-transform duration-300`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-xl ${agent.bgColor}`}>
                      <Icon className={`w-6 h-6 ${agent.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{agent.name}</h4>
                      <p className="text-sm text-slate-600">{agent.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

        </div>
      </div>
    </div>
  )
}
