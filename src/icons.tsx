import React from 'react'

const Svg: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, children, ...rest }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...rest}>
    {children}
  </svg>
)

export const ChevronRight = (p:any) => (<Svg {...p}><path d="M9 6l6 6-6 6"/></Svg>)
export const ChevronDown = (p:any) => (<Svg {...p}><path d="M6 9l6 6 6-6"/></Svg>)
export const FolderClosed = (p:any) => (<Svg {...p}><path d="M3 7h5l2 2h11v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/></Svg>)
export const FolderOpen = (p:any) => (<Svg {...p}><path d="M3 7h5l2 2h11"/><path d="M3 7v9a2 2 0 0 0 2 2h12.5a2 2 0 0 0 2-1.5l1.5-6.5H10L8 8H3z"/></Svg>)
export const FileCode2 = (p:any) => (<Svg {...p}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 13l-2 2 2 2"/><path d="M15 13l2 2-2 2"/></Svg>)
export const ExternalLink = (p:any) => (<Svg {...p}><path d="M14 3h7v7"/><path d="M10 14L21 3"/><path d="M21 14v7H3V3h7"/></Svg>)
export const ArrowLeft = (p:any) => (<Svg {...p}><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></Svg>)
export const Link2 = (p:any) => (<Svg {...p}><path d="M10 13a5 5 0 0 1 0-7l1-1a5 5 0 0 1 7 7l-1 1"/><path d="M14 11a5 5 0 0 1 0 7l-1 1a5 5 0 0 1-7-7l1-1"/></Svg>)
export const Layers3 = (p:any) => (<Svg {...p}><path d="M12 2l9 4-9 4-9-4 9-4z"/><path d="M3 10l9 4 9-4"/><path d="M3 16l9 4 9-4"/></Svg>)
export const ImageIcon = (p:any) => (<Svg {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8" cy="10" r="2"/><path d="M21 19l-6-6-4 4-2-2-6 6"/></Svg>)
export const Search = (p:any) => (<Svg {...p}><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></Svg>)
export const MonitorSmartphone = (p:any) => (<Svg {...p}><rect x="3" y="4" width="14" height="10" rx="2"/><rect x="19" y="7" width="2" height="6" rx="1"/></Svg>)
export const Code2 = (p:any) => (<Svg {...p}><path d="M9 18l-6-6 6-6"/><path d="M15 6l6 6-6 6"/></Svg>)
export const Box = (p:any) => (<Svg {...p}><path d="M21 16V8a2 2 0 0 0-1-1.73L13 2.27a2 2 0 0 0-2 0L4 6.27A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></Svg>)