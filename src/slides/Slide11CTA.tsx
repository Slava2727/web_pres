import { motion } from 'framer-motion'
import { Package, Rocket, Users, CheckCircle } from 'lucide-react'

const formats = [
  {
    icon: Package,
    title: 'Платформа',
    subtitle: 'самостоятельное внедрение',
    color: 'from-sky-500 to-blue-600',
    items: [
      'Доступ к платформе + документации',
      'Поддержка: ответы на вопросы, рекомендации по настройкам',
      'Бесплатные обучающие курсы и статьи',
      'Вы делаете внедрение своей командой',
      'Оплата: только подписка по тарифу',
    ],
    cta: {
      label: 'Актуальные тарифы',
      href: 'https://naimiai.ru/pricing',
    },
  },
  {
    icon: Rocket,
    title: 'Платформа + пакет запуска',
    color: 'from-violet-500 to-purple-600',
    type: 'packages',
    packages: [
      {
        title: 'Быстрый старт',
        details: [
          'Подключим каналы, обработаем и загрузим базу знаний, напишем регламент для одного ИИ-сотрудника',
        ],
        price: '55 000р',
      },
      {
        title: 'Оптимальный',
        details: [
          'Все из быстрого старта +',
          'Настроим мультиагентную систему из 3-х или более агентов',
          'Настроим регулярную загрузку и очистку БЗ или каталога',
          'Подготовим Агента-консультанта (продажи по каталогу)',
          'Сделаем 1 связку для работы во внешней системе для сервисного агента для выбранной роли (например «управление заказом» или любую другую)',
        ],
        price: '195 000р',
      },
    ],
    option: {
      title: 'Опция',
      details: ['Добавить доп агента + связку с внешней системой'],
      price: '60 т.р.',
    },
  },
  {
    icon: Users,
    title: 'Платформа + специалист по ИИ-трансформации',
    color: 'from-amber-500 to-orange-600',
    items: [
      'Ежемесячное сопровождение и развитие ИИ-решений под ваши процессы',
      'План/roadmap, внедрение, интеграции, контроль качества, обучение команды',
      'Постоянная оптимизация: качество ответов, % автоматизации, конверсия, снижение нагрузки',
      'Формат «Штатный специалист по ИИ», но быстрее и дешевле найма',
    ],
    price: 'от 150 000р/мес',
  },
]

export default function Slide11CTA() {
  return (
    <div className="min-h-full w-full bg-gradient-to-br from-white via-slate-50 to-slate-100 flex items-center justify-center relative overflow-hidden pb-24">
      {/* Background gradient accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Форматы работы с Naimi.ai
          </h2>
          <p className="text-base md:text-lg text-slate-600">
            От самостоятельного запуска до полного сопровождения
          </p>
        </motion.div>

        {/* Formats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)_minmax(0,1fr)] gap-6 mb-10"
        >
          {formats.map((format, index) => {
            const Icon = format.icon
            const isPackageCard = format.type === 'packages'
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className={`relative group ${isPackageCard ? 'lg:-mt-2' : ''}`}
              >
                <div
                  className={`${isPackageCard ? 'h-full' : 'h-auto'} p-6 rounded-2xl bg-white/90 border transition-all duration-300 ${
                    isPackageCard
                      ? 'border-violet-200/80 shadow-xl shadow-violet-500/10 hover:shadow-violet-500/20 ring-2 ring-violet-300/60'
                      : 'border-slate-200/80 hover:border-slate-300 hover:shadow-lg hover:shadow-sky-500/5'
                  }`}
                >
                  {isPackageCard && (
                    <div className="absolute -top-3 right-6 rounded-full bg-violet-600 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white shadow-md shadow-violet-600/30">
                      Популярный выбор
                    </div>
                  )}
                  {/* Icon with gradient bg */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${format.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-900 mb-1">{format.title}</h3>
                  {format.subtitle && (
                    <div className="text-sm text-slate-800 font-medium mb-4">{format.subtitle}</div>
                  )}

                  {!isPackageCard && format.items && (
                    <div className="space-y-2.5">
                      {format.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start gap-2 text-sm text-slate-800 font-medium leading-relaxed">
                          <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {format.price && (
                    <div className="mt-4 pt-4 text-sm font-semibold text-slate-900 text-center border-t border-amber-200/70">
                      {format.price}
                    </div>
                  )}

                  {isPackageCard && format.packages && (
                    <div className="space-y-4">
                      {format.packages.map((pack, packIndex) => (
                        <div key={packIndex} className="rounded-xl border border-slate-200/70 bg-slate-50/70 p-4">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <div className="text-base font-semibold text-slate-900">{pack.title}</div>
                            </div>
                            <div className="text-sm font-semibold text-slate-900 whitespace-nowrap">
                              {pack.price}
                            </div>
                          </div>
                          <div className="mt-2 space-y-2">
                            {pack.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="flex items-start gap-2 text-sm text-slate-800 font-medium leading-relaxed">
                                <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                                <span>{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                      {format.option && (
                        <div className="rounded-xl border border-violet-200/70 bg-white p-4 shadow-sm">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <div className="text-base font-semibold text-slate-900">
                                {format.option.title}
                              </div>
                            </div>
                            <div className="text-sm font-semibold text-slate-900 whitespace-nowrap">
                              {format.option.price}
                            </div>
                          </div>
                          <div className="mt-2 space-y-2">
                            {format.option.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="flex items-start gap-2 text-sm text-slate-800 font-medium leading-relaxed">
                                <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                                <span>{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {format.cta && (
                    <div className="mt-5 flex justify-center">
                      <a
                        className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-slate-900/20 transition hover:bg-slate-800"
                        href={format.cta.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {format.cta.label}
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <div className="mx-auto max-w-4xl rounded-2xl border border-amber-300/80 bg-amber-50/70 px-5 py-3 text-sm md:text-base font-semibold text-amber-900/90 shadow-sm shadow-amber-200/60">
            Enterprise / кастом-проекты: установка в контур, повышенные требования к ИБ, много интеграций, большие базы знаний и нестандартные процессы — оценивается отдельно.
          </div>
        </motion.div>

      </div>
    </div>
  )
}
