import React from 'react'

type Variant = 'default' | 'secondary'

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }> = ({ variant = 'default', className = '', ...props }) => {
  const base = 'inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition border'
  const styles = variant === 'secondary'
    ? 'border-zinc-700 bg-zinc-800/60 text-zinc-200 hover:bg-zinc-800'
    : 'border-red-900/60 bg-red-600/20 text-red-200 hover:bg-red-600/30'
  return <button className={`${base} ${styles} ${className}`} {...props} />
}