import React, { useEffect, useState } from 'react'
import { Card, CardContent } from '../ui/Card'
import { Button } from '../ui/Button'
import { Separator } from '../ui/Separator'
import { Link2, ExternalLink } from '../icons'

export default function BrowserView({ url }: { url: string }) {
  const [src, setSrc] = useState(url)
  useEffect(() => setSrc(url), [url])
  return (
    <Card className={`overflow-hidden bg-zinc-950/80 shadow-[0_0_25px_rgba(239,68,68,0.45)]`}>
      <div className="flex items-center justify-between border-b border-zinc-800 px-3 py-2">
        <div className="flex items-center gap-2 text-xs text-zinc-400">
          <span className="inline-block h-2 w-2 rounded-full bg-red-500" />
          <span className="inline-block h-2 w-2 rounded-full bg-yellow-500" />
          <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
          <Separator orientation="vertical" className="mx-2" />
          <Link2 className="h-4 w-4" />
          <span className="truncate max-w-[42ch]">{src}</span>
        </div>
        <div className="flex items-center gap-2">
          <Button className="h-7 px-3" onClick={() => setSrc(src)}>Reload</Button>
          <Button className="h-7 px-3" onClick={() => window.open(src, '_blank')}>
            <ExternalLink className="mr-2 h-4 w-4" /> Open in new tab
          </Button>
        </div>
      </div>
      <CardContent className="p-0">
        <div className="h-[52vh] w-full bg-zinc-900">
          <iframe title="app-browser" src={src} className="h-full w-full" sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-downloads" />
        </div>
      </CardContent>
    </Card>
  )
}