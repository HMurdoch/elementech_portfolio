import React from 'react'
import { motion } from 'framer-motion'

export default function AnimatedSystemGraphic() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0.2, scale: 1 }}
        animate={{ opacity: 0.35, scale: 1.05 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: 'mirror' }}
        className="pointer-events-none absolute -top-1/2 left-1/2 h[140vmax] w[140vmax] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(239,68,68,0.4)_0%,_transparent_60%)] blur-3xl"
      />
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[60vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-500/20"
      />
      <motion.div
        initial={{ x: -20 }}
        animate={{ x: 20 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        className="pointer-events-none absolute bottom-8 left-8 h-24 w-24 rounded-full bg-red-500/20 blur-xl"
      />
    </div>
  )
}