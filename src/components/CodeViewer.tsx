import React from 'react'
import { Badge } from '../ui/Badge'
import { FileCode2, Code2 } from '../icons'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function CodeViewer({ node }: { node: any | null }) {
  const panel = 'rounded-2xl border border-zinc-800/70 bg-zinc-900/70 backdrop-blur p-3'
  if (!node) {
    return (
      <div className={`${panel} flex h-full items-center justify-center text-zinc-400`}>
        <div className="flex flex-col items-center gap-2">
          <Code2 className="h-6 w-6" />
          <span>Select a file to preview code</span>
        </div>
      </div>
    )
  }
  return (
    <div className={`${panel} relative h-full`}>
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-zinc-300">
          <FileCode2 className="h-4 w-4" />
          <span className="font-medium">{node.path}</span>
        </div>
        {node.language && <Badge className="bg-red-900/50 text-red-200">{node.language}</Badge>}
      </div>
      <div className="h-[40vh] overflow-auto rounded-lg border border-zinc-800">
        <SyntaxHighlighter language={node.language || 'tsx'} style={vscDarkPlus} customStyle={{ margin: 0, background: '#0a0a0a' }}>
          {node.code || '// (No inline code provided for this file)'}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}