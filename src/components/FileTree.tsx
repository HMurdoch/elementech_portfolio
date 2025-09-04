import React, { useState } from 'react'
import { ChevronDown, ChevronRight, FolderClosed, FolderOpen, FileCode2 } from '../icons'
export type FileNode = import('../data/projects').FileNode

export default function FileTree({ nodes, onOpenFile }: { nodes: FileNode[]; onOpenFile: (n: FileNode) => void }) {
  return (
    <div className="text-sm">
      {nodes.map((n) => (
        <TreeNode key={n.path} node={n} onOpenFile={onOpenFile} />
      ))}
    </div>
  )
}

function TreeNode({ node, depth = 0, onOpenFile }: { node: FileNode; depth?: number; onOpenFile: (n: FileNode) => void }) {
  const [open, setOpen] = useState(true)
  const isFolder = node.type === 'folder'
  return (
    <div>
      <div
        className={`group flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1 hover:bg-zinc-800/60`}
        style={{ paddingLeft: depth * 12 + 8 }}
        onClick={() => (isFolder ? setOpen((v) => !v) : onOpenFile(node))}
      >
        {isFolder ? (
          <>
            {open ? <ChevronDown className="h-4 w-4 text-zinc-400" /> : <ChevronRight className="h-4 w-4 text-zinc-400" />}
            {open ? <FolderOpen className="h-4 w-4 text-zinc-300" /> : <FolderClosed className="h-4 w-4 text-zinc-300" />}
            <span className="text-zinc-200">{node.name}</span>
          </>
        ) : (
          <>
            <FileCode2 className="h-4 w-4 text-zinc-300" />
            <span className="text-zinc-300">{node.name}</span>
          </>
        )}
      </div>
      {isFolder && open && node.children && (
        <div className="ml-0 border-l border-zinc-800/60">
          {node.children.map((c) => (
            <TreeNode key={c.path} node={c} depth={depth + 1} onOpenFile={onOpenFile} />
          ))}
        </div>
      )}
    </div>
  )
}