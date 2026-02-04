import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import platformScreenshot from '../assets/platfrom_screenshot.png'
import naimiLogo from '../assets/Naimi_logo.svg'

const benefits = [
  'Удобное управление ИИ из простого интерфейса. Вы не зависите от нас или любого другого подрядчика.',
  'Надежность данных: сервера в РФ, подписываем NDA, соответствуем ФЗ-152.',
  'Поддержка разных ИИ: GPT, DeepSeek, Gemini, GigaChat.',
  'Множество интеграций.',
  'Основано на 11 годах опыта работы с текстовыми коммуникациями.',
]

export default function Slide12AiTransformation() {
  return (
    <div className="min-h-full w-full bg-gradient-to-br from-white via-slate-50 to-slate-100 flex items-center justify-center relative overflow-hidden pb-24">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <img src={naimiLogo} alt="Naimi" className="h-11 w-auto" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Naimi — система управления ИИ
            </h2>
          </div>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
            Всё, что нужно для внедрения ИИ в процессы, уже собрано внутри одной платформы.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.35fr)] gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="pt-2"
          >
            <h3 className="text-2xl font-semibold text-slate-900 mb-5">Преимущества</h3>
            <div className="space-y-2.5">
              {benefits.map((item, index) => (
                <div key={index} className="flex items-start gap-2 text-base md:text-lg text-slate-700 leading-relaxed">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center"
          >
            <img
              src={platformScreenshot}
              alt="Скриншот системы Naimi"
              className="w-full h-auto"
            />
          </motion.div>
        </div>

        <div className="flex justify-center">
          <div className="max-w-4xl rounded-2xl border border-orange-300/80 bg-white/80 px-6 py-4 text-center shadow-sm shadow-orange-200/40">
            <p className="text-base md:text-lg text-slate-900 font-semibold">
              Вашим сотрудникам не нужно учиться работать в новой системе: у них просто
              появится надежный коллега.
            </p>
          </div>
        </div>

        <div className="sr-only">
          Naimi — система управления ИИ, которая помогает внедрить ИИ в процессы через
          единый интерфейс. Платформа поддерживает разные модели, интеграции и
          соответствует требованиям к данным. Сотрудникам не нужно переучиваться: у них
          просто появляется надежный коллега.
        </div>
      </div>
    </div>
  )
}
