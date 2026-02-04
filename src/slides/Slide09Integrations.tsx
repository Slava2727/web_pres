import { motion } from 'framer-motion'
import { MessageCircle, Settings, CheckCircle } from 'lucide-react'
import TelegramLogo from '../assets/channels_integrations/Telegram.svg'
import MaxLogo from '../assets/channels_integrations/max-messenger-sign-logo.svg'
import WhatsAppLogo from '../assets/channels_integrations/whatsapp.png'
import SherlockLogo from '../assets/channels_integrations/logo_sherlock.png'
import RetailCRMLogo from '../assets/channels_integrations/RetailCRM.svg'
import WazzupLogo from '../assets/channels_integrations/wazzap.png'
import JivoLogo from '../assets/channels_integrations/Jivo.png'
import BitrixLogo from '../assets/channels_integrations/Bitrix24.svg'
import AmoLogo from '../assets/channels_integrations/amo.jpeg'
import AvitoLogo from '../assets/channels_integrations/avito.svg'
import WildberriesLogo from '../assets/channels_integrations/Wildberries.svg'
import OzonLogo from '../assets/channels_integrations/Ozon_logopng.png'
import OneCLogo from '../assets/channels_integrations/1с.jpeg'
import MySkladLogo from '../assets/channels_integrations/my_sklad.png'
import RetailCRMminiLogo from '../assets/channels_integrations/RetailCRMmini.svg'
import YooKassaLogo from '../assets/channels_integrations/Логотип_ЮKassa.png'

const channelSections = [
  {
    title: 'Каналы',
    items: [
      { name: 'Telegram', logo: TelegramLogo, showLabel: true },
      { name: 'Max', logo: MaxLogo, showLabel: true },
      { name: 'WhatsApp', logo: WhatsAppLogo, showLabel: true },
    ],
  },
  {
    title: 'CRM и чат-платформы',
    items: [
      { name: 'Sherlock Platform', logo: SherlockLogo },
      { name: 'RetailCRM', logo: RetailCRMLogo },
      { name: 'Wazzup24', logo: WazzupLogo },
      { name: 'Jivo', logo: JivoLogo },
      { name: 'Bitrix24', logo: BitrixLogo },
      { name: 'AmoCRM', logo: AmoLogo, isBeta: true, showLabel: true },
    ],
  },
  {
    title: 'Маркетплейсы',
    items: [
      { name: 'Avito', logo: AvitoLogo, showLabel: true },
      { name: 'Wildberries', logo: WildberriesLogo, isBeta: true },
      { name: 'Ozon', logo: OzonLogo, isBeta: true },
    ],
  },
]

const mcpSystems = [
  { name: '1C', logo: OneCLogo },
  { name: 'МойСклад', logo: MySkladLogo },
  { name: 'RetailCRM', logo: RetailCRMminiLogo },
  { name: 'ЮKassa', logo: YooKassaLogo },
]

const mcpPlaceholders = Array.from({ length: 4 }, (_, index) => ({
  id: `placeholder-${index + 1}`,
}))

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
    <div className="min-h-full w-full bg-gradient-to-br from-white via-slate-50 to-slate-100 flex items-center justify-center relative overflow-hidden pb-24">
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

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Встраиваемся в ваш IT-ландшафт
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Channels */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="p-6 rounded-2xl bg-white/80 border border-slate-200/80">
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="w-6 h-6 text-sky-400" />
                <h3 className="text-xl font-semibold text-slate-900">Каналы связи</h3>
              </div>
              
              <div className="space-y-5 mb-6">
                {channelSections.map((section, sectionIndex) => (
                  <div key={section.title}>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
                      {section.title}
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {section.items.map((item, index) => (
                        <motion.div
                          key={`${section.title}-${item.name}`}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.25 + sectionIndex * 0.1 + index * 0.05 }}
                          className="flex flex-col items-center justify-center gap-1.5 p-3 min-h-[78px] rounded-xl bg-white/70 border border-slate-200/80 shadow-[0_1px_0_rgba(15,23,42,0.04)]"
                        >
                          <img
                            src={item.logo}
                            alt={item.name}
                            className="h-7 w-auto max-w-[110px] object-contain"
                          />
                          <div className="flex items-center gap-2">
                            {item.showLabel ? (
                              <span className="text-[12px] text-slate-700 font-medium">{item.name}</span>
                            ) : (
                              <span className="text-[12px] text-slate-700 font-medium opacity-0">
                                {item.name}
                              </span>
                            )}
                            {item.isBeta ? (
                              <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-700 border border-amber-500/30 uppercase">
                                beta
                              </span>
                            ) : (
                              <span className="h-[16px] w-[1px] opacity-0" />
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-sm text-slate-600 flex items-center gap-2">
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
                  <h3 className="text-xl font-semibold text-slate-900">Инструменты: реальная работа в ваших системах</h3>
                  <p className="text-sm text-slate-600">ИИ не просто «болтает», он управляет системами</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {mcpActions.map((action, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4 p-3 rounded-xl bg-white/80 border border-slate-200/80"
                  >
                    <span className="text-2xl">{action.icon}</span>
                    <div>
                      <div className="text-slate-900 font-medium">{action.action}</div>
                      <div className="text-xs text-slate-600">{action.example}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-white/70">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
                  Подключим любые системы
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {mcpSystems.map((system) => (
                    <div
                      key={system.name}
                      className="h-12 rounded-lg bg-white/90 border border-slate-200 flex items-center justify-center"
                    >
                      <img src={system.logo} alt={system.name} className="h-6 w-auto object-contain" />
                    </div>
                  ))}
                  {mcpPlaceholders.map((placeholder) => (
                    <div
                      key={placeholder.id}
                      className="h-12 rounded-lg border border-dashed border-slate-300 bg-white/60 flex items-center justify-center"
                    >
                      <div className="w-3 h-3 rounded-full border border-slate-300" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
