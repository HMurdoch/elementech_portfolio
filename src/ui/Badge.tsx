import React from 'react'
export const Badge: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({ className = '', ...props }) => (
  <span className={`inline-flex items-center rounded-lg border border-red-900/40 bg-red-900/30 px-2 py-0.5 text-xs text-red-200 ${className}`} {...props} />
)