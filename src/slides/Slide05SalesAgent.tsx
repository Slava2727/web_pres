import { motion } from 'framer-motion'
import { ShoppingCart, Search, Gift, Calculator, CreditCard, MessageCircle, ArrowRight } from 'lucide-react'

const features = [
  {
    icon: Search,
    title: 'Работа с каталогом',
    description: 'Подбор товара по нечётким запросам: «масло для ретро-авто», «кофемашина течёт»',
  },
  {
    icon: Gift,
    title: 'Smart-рекомендации',
    description: 'Предлагает сопутствующие товары (кросс-сейл) на основе наличия',
  },
  {
    icon: Calculator,
    title: 'Расчёты',
    description: 'Калькуляция стоимости доставки на лету с учётом всех условий',
  },
  {
    icon: CreditCard,
    title: 'Финал сделки',
    description: 'Формирование корзины и отправка ссылки на оплату с UTM-меткой',
  },
]

const chatMessages = [
  { type: 'user', text: 'Добрый день! Нужно масло для BMW E39 2002 года' },
  { type: 'bot', text: 'Здравствуйте! Для вашего BMW E39 рекомендую Motul 8100 X-cess 5W-40 — полностью синтетическое масло, одобренное BMW. В наличии: канистра 5л за 4 890 ₽' },
  { type: 'user', text: 'А фильтр подберёте?' },
  { type: 'bot', text: 'Конечно! К вашему двигателю подойдёт фильтр MANN W719/30 — 890 ₽. Вместе с маслом сделаю бесплатную доставку. Оформляем?' },
]

export default function Slide05SalesAgent() {
  return (
    <div className="min-h-full w-full bg-gradient-to-br from-white via-slate-50 to-slate-100 flex items-center justify-center relative overflow-hidden pb-24">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-500/5 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Info */}
          <div>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-6">
                <ShoppingCart className="w-4 h-4" />
                <span className="text-sm font-medium">Роль 1</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Агент-консультант
              </h2>
              <p className="text-xl text-slate-600">
                Продажи 24/7. Консультация, подбор, upsell.
              </p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/80 border border-slate-200/80 hover:border-emerald-500/30 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-emerald-500/10">
                      <Icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-slate-600">{feature.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          {/* Right: Chat demo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            {/* Chat window */}
            <div className="bg-white/90 rounded-3xl border border-slate-200/80 overflow-hidden shadow-2xl">
              {/* Chat header */}
              <div className="px-6 py-4 border-b border-slate-200/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">ИИ-консультант</h4>
                  <p className="text-xs text-emerald-400">Онлайн</p>
                </div>
              </div>

              {/* Messages */}
              <div className="p-6 space-y-4 max-h-[400px] overflow-y-auto">
                {chatMessages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.2 }}
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] px-4 py-3 rounded-2xl ${
                        msg.type === 'user'
                          ? 'bg-sky-500 text-white rounded-br-md'
                          : 'bg-slate-100 text-slate-700 rounded-bl-md'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Input area */}
              <div className="px-6 py-4 border-t border-slate-200/80">
                <div className="flex items-center gap-3">
                  <div className="flex-1 px-4 py-3 rounded-full bg-slate-100 text-slate-600 text-sm">
                    Введите сообщение...
                  </div>
                  <button className="p-3 rounded-full bg-emerald-500 text-white">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-emerald-500/10 rounded-3xl blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
