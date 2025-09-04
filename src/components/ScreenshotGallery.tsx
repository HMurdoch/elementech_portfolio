import React, { useState } from 'react'
import SectionHeader from './SectionHeader'
import { ImageIcon } from '../icons'
import { AnimatePresence, motion } from 'framer-motion'

export default function ScreenshotGallery({ shots }: { shots: { id: string; src: string; caption?: string }[] }) {
  const [active, setActive] = useState<null | { id: string; src: string; caption?: string }>(null)
  const panel = 'rounded-2xl border border-zinc-800/70 bg-zinc-900/70 backdrop-blur p-3'
  return (
    <div className={panel}>
      <SectionHeader icon={ImageIcon} title="Screenshots" />
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
        {shots?.length ? (
          shots.map((s) => (
            <button key={s.id} className="group overflow-hidden rounded-xl border border-zinc-800/70" onClick={() => setActive(s)}>
              <img src={s.src} alt={s.caption || 'screenshot'} className="h-28 w-full object-cover transition duration-300 group-hover:scale-105" />
              {s.caption && <div className="truncate px-2 py-1 text-xs text-zinc-400">{s.caption}</div>}
            </button>
          ))
        ) : (
          <div className="col-span-full py-6 text-center text-sm text-zinc-500">Add screenshots to this project.</div>
        )}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4" onClick={() => setActive(null)}>
            <motion.img initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} src={active.src} alt={active.caption || 'screenshot'} className="max-h-[85vh] max-w-[90vw] rounded-xl shadow-2xl" />
            {active.caption && <div className="mt-3 text-sm text-zinc-300">{active.caption}</div>}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}