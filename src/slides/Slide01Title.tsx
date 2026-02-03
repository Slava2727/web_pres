import { motion } from 'framer-motion'
import { Sparkles, TrendingUp, Users } from 'lucide-react'

import naimiLogo from '../assets/Naimi_logo.svg'
import logoGoldenApple from '../assets/logo_ga.png'
import logoOkko from '../assets/logo_okko.svg'
import logo12Storeez from '../assets/logo_12st.png'
import logoMotul from '../assets/logo_motul.png'

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
          <div className="w-14 h-14 rounded-2xl bg-white/90 border border-slate-200/80 flex items-center justify-center shadow-lg shadow-slate-900/5 backdrop-blur-sm">
            <img
              src={naimiLogo}
              alt="NaimiAI"
              className="w-9 h-9 object-contain"
              draggable={false}
            />
          </div>
          <span className="text-3xl font-bold text-slate-900">NaimiAI.ru</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight"
        >
          <span className="gradient-text">ИИ-сотрудники</span> для онлайн-торговли
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
          <p className="text-sm uppercase tracking-wider mb-4">Внедряем чат-коммуникации с 2015 года</p>
          <div className="flex flex-wrap justify-center items-center gap-10">
            <img
              src={logoGoldenApple}
              alt="Золотое Яблоко"
              className="h-7 md:h-8 w-auto object-contain opacity-80"
              draggable={false}
            />
            <img
              src={logoOkko}
              alt="Okko"
              className="h-6 md:h-7 w-auto object-contain opacity-80"
              draggable={false}
            />
            <img
              src={logo12Storeez}
              alt="12 Storeez"
              className="h-6 md:h-7 w-auto object-contain opacity-80"
              draggable={false}
            />
            <img
              src={logoMotul}
              alt="Motul"
              className="h-7 md:h-8 w-auto object-contain opacity-80"
              draggable={false}
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
