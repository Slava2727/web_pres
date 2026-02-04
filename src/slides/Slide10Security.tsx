import { motion } from 'framer-motion'
import { FileCheck, Lock, Server, ExternalLink } from 'lucide-react'

const securityPoints = [
  {
    icon: FileCheck,
    title: 'Юридическая чистота',
    description: 'ООО «Лабитек Девелопмент» — зарегистрированный оператор ПДн. Подписываем поручение на обработку.',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    links: [
      {
        text: 'Поручение на обработку перс данных',
        url: 'https://storage.yandexcloud.net/docs.naimiai.ru/files/%D0%9F%D0%BE%D1%80%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BD%D0%B0%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D1%83%20%D0%BF%D0%B5%D1%80%D1%81%20%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85%20%D0%9B%D0%B0%D0%B1%D0%B8%D1%82%D0%B5%D0%BA.docx',
      },
      {
        text: 'Шаблон формы согласия конечного клиента',
        url: 'https://storage.yandexcloud.net/docs.naimiai.ru/files/%D0%A4%D0%BE%D1%80%D0%BC%D0%B0%20%D1%81%D0%BE%D0%B3%D0%BB%D0%B0%D1%81%D0%B8%D1%8F%20%D0%BA%D0%BE%D0%BD%D0%B5%D1%87%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BA%D0%BB%D0%B8%D0%B5%D0%BD%D1%82%D0%B0.doc',
      },
      {
        text: 'Проверить в реестре операторов ПДн',
        url: 'https://reestr.digital.gov.ru/reestr/3392728/?sphrase_id=6275202',
      },
    ],
  },
  {
    icon: Lock,
    title: 'Техническая защита',
    description: 'Маскирование персональных данных перед отправкой в LLM. ИИ видит только технические ID.',
    color: 'text-sky-400',
    bgColor: 'bg-sky-500/10',
  },
  {
    icon: Server,
    title: 'Enterprise опции',
    description: 'Установка в контур компании (On-premise), использование РФ моделей (GigaChat и др.)',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
  },
]

export default function Slide10Security() {
  return (
    <div className="min-h-full w-full bg-gradient-to-br from-white via-slate-50 to-slate-100 flex items-center justify-center relative overflow-hidden pb-24">
      {/* Background shield effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          ФЗ-152 и защита персональных данных
          </h2>
          <p className="text-xl text-slate-600">
          Безопасность данных — наш приоритет
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Security points */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            {securityPoints.map((point, index) => {
              const Icon = point.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="p-5 rounded-2xl bg-white/80 border border-slate-200/80 hover:border-emerald-500/30 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${point.bgColor}`}>
                      <Icon className={`w-6 h-6 ${point.color}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-slate-900 mb-2">{point.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed mb-3">{point.description}</p>
                      {point.links && (
                        <div className="space-y-2 mt-3">
                          {point.links.map((link, linkIndex) => (
                            <a
                              key={linkIndex}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-emerald-600 hover:text-emerald-400 transition-colors flex items-center gap-1.5 group"
                            >
                              <span>{link.text}</span>
                              <ExternalLink className="w-3 h-3 opacity-70 group-hover:opacity-100" />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Right: Masking visualization */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/80 to-slate-50/80 border border-slate-200/80">
              <h3 className="text-lg font-semibold text-slate-900 mb-6">Как работает маскирование</h3>
              
              {/* Before */}
              <div className="mb-4">
                <div className="text-xs text-slate-600 uppercase tracking-wider mb-2">Сообщение клиента</div>
                <div className="p-4 rounded-xl bg-white/90 border border-slate-200/80">
                  <p className="text-slate-700 font-mono text-sm">
                    Где мой заказ? Моя почта{' '}
                    <span className="text-red-400 bg-red-500/10 px-1 rounded">slava@mail.ru</span>
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center my-4">
                <div className="flex items-center gap-2 text-slate-600">
                  <div className="w-8 h-px bg-slate-300" />
                  <span className="text-xs">Маскируем на нашей стороне</span>
                  <div className="w-8 h-px bg-slate-300" />
                </div>
              </div>

              {/* After */}
              <div className="mb-4">
                <div className="text-xs text-slate-600 uppercase tracking-wider mb-2">Отправляется в LLM</div>
                <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                  <p className="text-slate-700 font-mono text-sm">
                    Где мой заказ? Моя почта{' '}
                    <span className="text-emerald-400 bg-emerald-500/10 px-1 rounded">[ID_EMAIL_7f3d]</span>
                  </p>
                </div>
              </div>

              {/* Note */}
              <div className="p-4 rounded-xl bg-sky-500/5 border border-sky-500/20">
                <p className="text-sky-400 text-sm flex items-start gap-2">
                  <Lock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  Персональные данные остаются в РФ. LLM видит только технические идентификаторы.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
