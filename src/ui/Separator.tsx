import React from 'react'
export const Separator: React.FC<{ orientation?: 'horizontal'|'vertical'; className?: string }> = ({ orientation = 'horizontal', className = '' }) => (
  <div className={`${orientation === 'vertical' ? 'h-4 w-px' : 'h-px w-full'} bg-zinc-800 ${className}`} />
)