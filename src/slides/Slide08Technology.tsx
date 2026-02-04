import { motion } from 'framer-motion'
import { Database, RefreshCw, Filter, AlertTriangle } from 'lucide-react'

const steps = [
  {
    step: 1,
    title: 'Выгрузка каталога',
    description: 'Получение данных из вашей системы по расписанию',
    icon: Database,
  },
  {
    step: 2,
    title: 'Очистка и нормализация',
    description: 'Фильтрация мусора: черновики, дубли, скрытые SKU',
    icon: Filter,
  },
  {
    step: 3,
    title: 'Загрузка в ИИ',
    description: 'Автоматическое обновление базы знаний агента',
    icon: RefreshCw,
  },
]

const problems = [
  'Технические позиции',
  'Дубли карточек',
  'Скрытые товары',
  'Внутренние названия',
  'Черновики',
  'Неприоритетные категории',
]

export default function Slide08Technology() {
  return (
    <div className="min-h-full w-full bg-gradient-to-br from-white via-slate-50 to-slate-100 flex items-center justify-center relative overflow-hidden pb-24">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(15,23,42,0.12) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }} />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Чистота данных
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            ИИ хорош настолько, насколько хороша ваша база знаний
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Problem */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/20 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-red-400" />
                <h3 className="text-xl font-semibold text-slate-900">Проблема «грязных» данных</h3>
              </div>
              <p className="text-slate-600 mb-4">
                В выгрузках товаров всегда есть «мусор», который мешает ИИ работать корректно:
              </p>
              <div className="flex flex-wrap gap-2">
                {problems.map((problem, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-sm border border-red-500/20"
                  >
                    {problem}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right: Pipeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Чистая база для ИИ</h3>
              <p className="text-slate-600">
                Автоматический скрипт очистки и нормализации перед загрузкой в мозг ИИ. Агент работает только с актуальным стоком.
              </p>
            </div>

            <div className="pl-6 mt-6">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.15 }}
                    className="flex items-start gap-4"
                  >
                    {/* Step indicator */}
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/30 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-orange-400" />
                      </div>
                      {index < steps.length - 1 && (
                        <div className="w-px h-8 bg-gradient-to-b from-orange-500/30 to-transparent my-2" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-4">
                      <div className="text-xs text-orange-400 font-medium mb-1">Шаг {step.step}</div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-1">{step.title}</h4>
                      <p className="text-slate-600 text-sm">{step.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
