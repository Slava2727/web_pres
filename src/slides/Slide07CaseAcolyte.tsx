import { motion } from 'framer-motion'
import {
  CheckCircle,
  Clock,
  Database,
  MessageSquare,
  Search,
  ShieldCheck,
  ShoppingBag,
  TrendingUp,
  Users,
  Workflow,
} from 'lucide-react'

import acolyteCover from '../assets/acolyte.png'
import dataFromCrm from '../assets/data_from_crm2.png'

const highlights = [
  { value: '88%', label: 'диалогов закрываются без оператора', icon: MessageSquare, color: 'text-emerald-500' },
  { value: '24/7', label: 'работа без выходных и перерывов', icon: Clock, color: 'text-indigo-500' },
  { value: '3 канала', label: 'единый tone of voice везде', icon: CheckCircle, color: 'text-sky-500' },
]

const systemFeatures = [
  'Автоматическое обогащение контекстом из CRM',
  'Поиск клиента по телефону или имени при отсутствии ID',
  'Актуальный каталог с ценами, составом и размерами',
  'Эскалация на оператора по триггерам и сложным кейсам',
]

const businessEffects = [
  {
    title: 'Продажи',
    icon: TrendingUp,
    color: 'text-emerald-500',
    points: [
      'Быстрые ответы без потерь лидов.',
      'Подбор товара в чате: цена, состав, уход, размер, ссылка.',
      'UTM на ссылках — видим заказы от AI.',
    ],
  },
  {
    title: 'Поддержка',
    icon: Users,
    color: 'text-blue-500',
    points: [
      'Типовые вопросы закрываются автоматически.',
      'Качество сервиса стабильно в пики и ночью.',
      'Оператор только на сложные и риск-кейсы.',
    ],
  },
]

const architecture = [
  {
    title: 'Главный агент (оркестратор)',
    icon: Workflow,
    points: [
      'Анализирует намерение и распределяет задачи',
      'Координирует специализированных агентов',
      'Формирует единый ответ в tone of voice бренда',
    ],
  },
  {
    title: 'ServiceAgent',
    icon: CheckCircle,
    points: [
      'Доставка, оплата, возвраты, сервисные вопросы',
      'Работает строго по базе знаний компании',
    ],
  },
  {
    title: 'ProductAgent',
    icon: ShoppingBag,
    points: [
      'Поиск товаров с характеристиками и ценами',
      'Подбор по размеру, составу, уходу',
      'UTM-разметка ссылок для отслеживания продаж',
    ],
  },
  {
    title: 'CRM Search Agent',
    icon: Search,
    points: [
      'Поиск клиента по телефону или имени',
      'Возвращает историю заказов и статусы',
      'Автоэскалация при невозможности идентификации',
    ],
  },
]

const crmModes = [
  {
    title: 'С идентификацией клиента',
    description: 'Если клиент есть в CRM, то в промпт ИИ сразу передается история и заказы',
  },
  {
    title: 'Без идентификации',
    description: 'Агент запрашивает телефон/имя → поиск через CRM Search Agent → получаем историю и заказы',
  },
]

const qualityControl = [
  {
    title: 'Управление каталогом',
    icon: ShoppingBag,
    points: [
      'Автоочистка фида от служебных позиций',
      'Нормализация атрибутов перед загрузкой',
      'Принцип: нашёл в каталоге → вернул, не нашёл → эскалация',
    ],
  },
  {
    title: 'Контроль ответов',
    icon: ShieldCheck,
    points: [
      'Три источника данных: CRM, FAQ, каталог',
      'Триггеры эскалации: брак, нестандартная оплата, B2B',
      'Лимит длины, tone of voice, дисклеймер об AI',
    ],
  },
]

export default function Slide07CaseAcolyte() {
  return (
    <div className="min-h-full w-full bg-gradient-to-br from-white via-slate-50 to-slate-100 relative overflow-hidden">
      <div className="absolute -top-32 right-0 w-[520px] h-[520px] bg-emerald-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[480px] h-[480px] bg-blue-400/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-8 py-12 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Кейс: Acolyte: 88% диалогов закрываются без участия оператора
            </h2>
            <p className="text-lg text-slate-600">
              Рост бизнеса, высокий сезон и успехи маркетинговых кампаний дали резкое увеличение числа обращений. ИИ-сотрудники на базе "Найми-ИИ" были внедрены в работу за 1 месяц и позволили справиться с нагрузкой не раздувая штат.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/90 border border-slate-200/80 px-4 py-5 text-center"
                  >
                    <Icon className={`w-6 h-6 mx-auto mb-2 ${item.color}`} />
                    <div className={`text-2xl font-bold ${item.color}`}>{item.value}</div>
                    <div className="text-xs text-slate-600">{item.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="relative">
            <img
              src={acolyteCover}
              alt="Acolyte case cover"
              className="w-full h-auto rounded-3xl shadow-xl border border-white/70 object-cover"
              draggable={false}
            />
            <div className="absolute -bottom-4 -right-4 bg-white/90 border border-slate-200/70 rounded-2xl px-4 py-3 shadow-lg">
              <div className="text-xs text-slate-500">Эффект</div>
              <div className="text-lg font-semibold text-slate-900">88% self-serve диалогов</div>
            </div>
          </div>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start"
        >
          <div className="rounded-3xl bg-white/90 border border-slate-200/80 p-6">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">Что внедрено</h3>
            <ul className="space-y-3 text-slate-600">
              {systemFeatures.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {businessEffects.map((effect, index) => {
              const Icon = effect.icon
              return (
                <div key={index} className="rounded-3xl bg-white/90 border border-slate-200/80 p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center">
                      <Icon className={`w-5 h-5 ${effect.color}`} />
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900">{effect.title}</h4>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-600">
                    {effect.points.map((point, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className={`mt-1 text-xs ${effect.color}`}>●</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start"
        >
          <div className="rounded-3xl bg-white/90 border border-slate-200/80 p-6 space-y-5">
            <div className="flex items-center gap-3">
              <Database className="w-6 h-6 text-slate-600" />
              <h3 className="text-2xl font-semibold text-slate-900">Работа с CRM</h3>
            </div>
            <p className="text-slate-600">
              Система адаптируется к возможностям канала: использует готовый ID или запрашивает контакт для поиска клиента.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {crmModes.map((mode, index) => (
                <div key={index} className="rounded-2xl border border-slate-200/70 bg-slate-50 px-4 py-4">
                  <div className="text-sm font-semibold text-slate-900 mb-2">{mode.title}</div>
                  <div className="text-sm text-slate-600">{mode.description}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-white/90 border border-slate-200/80 p-4">
            <img
              src={dataFromCrm}
              alt="Обогащение данных из CRM"
              className="w-full h-auto rounded-2xl object-cover"
              draggable={false}
            />
            <div className="mt-4 text-sm text-slate-600">
              Обогащение данных происходит автоматически при поступлении диалога
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <Workflow className="w-6 h-6 text-slate-600" />
            <h3 className="text-2xl font-semibold text-slate-900">Архитектура мультиагентной системы</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {architecture.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="rounded-3xl bg-white/90 border border-slate-200/80 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-slate-700" />
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {item.points.map((point, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="mt-1 text-xs text-slate-400">●</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-slate-600" />
            <h3 className="text-2xl font-semibold text-slate-900">Контроль качества</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {qualityControl.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="rounded-3xl bg-white/90 border border-slate-200/80 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-slate-700" />
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {item.points.map((point, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="mt-1 text-xs text-slate-400">●</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-slate-700">
                <span className="font-semibold text-emerald-700">Защита от галлюцинаций:</span> агенты работают только с проверенными источниками — если данных нет, система эскалирует запрос оператору вместо генерации ответа.
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
