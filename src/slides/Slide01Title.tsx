import { motion } from 'framer-motion'
import { Bot, Sparkles, TrendingUp, Users } from 'lucide-react'

export default function Slide01Title() {
  return (
    <div className="min-h-full w-full bg-gradient-to-br from-white via-slate-50 to-slate-100 flex items-center justify-center relative overflow-hidden pb-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-400/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(15,23,42,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.08) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
        {/* Logo / Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center shadow-lg shadow-sky-500/30">
            <Bot className="w-8 h-8 text-white" />
          </div>
          <span className="text-3xl font-bold text-slate-900">naimi.ai</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight"
        >
          Наймите{' '}
          <span className="gradient-text">ИИ-сотрудников</span>
          <br />
          для вашего интернет-магазина
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto"
        >
          Цифровой отдел продаж и заботы о клиентах для E-commerce
        </motion.p>

        {/* Key metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900/5 border border-slate-200/80 backdrop-blur-sm">
            <Users className="w-5 h-5 text-sky-400" />
            <span className="text-slate-900 font-medium">Уровень Junior/Middle</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900/5 border border-slate-200/80 backdrop-blur-sm">
            <TrendingUp className="w-5 h-5 text-green-400" />
            <span className="text-slate-900 font-medium">60–88% автоматизации</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900/5 border border-slate-200/80 backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-slate-900 font-medium">Без потери качества</span>
          </div>
        </motion.div>

        {/* Trusted by */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-slate-500"
        >
          <p className="text-sm uppercase tracking-wider mb-4">Нам доверяют</p>
          <div className="flex flex-wrap justify-center items-center gap-8 text-slate-500">
            <span className="text-lg font-semibold">Золотое Яблоко</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span className="text-lg font-semibold">Okko</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span className="text-lg font-semibold">12 Storeez</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span className="text-lg font-semibold">Motul</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
