import React from 'react'

export default function SectionHeader({ icon: Icon, title, action }: { icon: any, title: string, action?: React.ReactNode }) {
  return (
    <div className="mb-2 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Icon className="h-5 w-5 text-red-400" />
        <h3 className="text-sm font-semibold tracking-wide text-red-300">{title}</h3>
      </div>
      {action}
    </div>
  )
}