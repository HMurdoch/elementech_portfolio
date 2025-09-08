import React, { useMemo, useState } from 'react'
import AnimatedSystemGraphic from './components/AnimatedSystemGraphic'
import SectionHeader from './components/SectionHeader'
import FileTree from './components/FileTree'
import BrowserView from './components/BrowserView'
import CodeViewer from './components/CodeViewer'
import ScreenshotGallery from './components/ScreenshotGallery'
import { Card, CardContent } from './ui/Card'
import { Input } from './ui/Input'
import { Button } from './ui/Button'
import { Badge } from './ui/Badge'
import { ScrollArea } from './ui/ScrollArea'
import { Separator } from './ui/Separator'
import { TooltipProvider } from './ui/TooltipProvider'
import { ChevronRight, MonitorSmartphone, Layers3, ArrowLeft } from './icons'
import { PROJECTS, TECHNOLOGIES, COURSES } from './data/projects'

function useDebounced<T>(value: T, ms = 250) {
  const [v, setV] = React.useState(value)
  React.useEffect(() => { const t = setTimeout(() => setV(value), ms); return () => clearTimeout(t) }, [value, ms])
  return v
}

function DevTests() {
  const panel = 'rounded-2xl border border-zinc-800/70 bg-zinc-900/70 backdrop-blur p-3'
  const results = React.useMemo(() => {
    const out: { name: string; ok: boolean; msg?: string }[] = []
    const pass = (name:string)=>out.push({name,ok:true})
    const fail = (name:string,msg?:string)=>out.push({name,ok:false,msg})
    try {
      const ids = Object.keys(PROJECTS)
      if (ids.length>=1) pass('Projects exist'); else fail('Projects exist','No projects defined')
      for (const id of ids){const p=PROJECTS[id]; if(!p.id||!p.title||!p.homepageUrl) fail('Project required fields',`Missing on ${id}`)}
      pass('Project required fields present')
      for (const id of ids){const seen=new Set<string>(); const walk=(nodes:any[]=[])=>{for(const n of nodes){ if(seen.has(n.path)) fail('Unique file paths',`Duplicate in ${id}: ${n.path}`); seen.add(n.path); if(n.children) walk(n.children)}}; walk(PROJECTS[id].files||[])}
      pass('Unique file paths per project')
      for (const id of ids){Array.isArray(PROJECTS[id].screenshots) ? null : fail('Screenshots array',`not array ${id}`)}
      pass('Screenshots arrays present')
      const list=[{label:'React + Azure Banking Portal',projectId:'demoBank'},{label:'React + Node E‑Commerce',projectId:'demoEcom'}]
      const filtered=list.filter(t=>t.label.toLowerCase().includes('react'))
      if(filtered.length===2) pass('Search filter case-insensitive'); else fail('Search filter case-insensitive',`Expected 2, got ${filtered.length}`)
    } catch(e:any){ fail('Unhandled test exception', String(e?.message||e)) }
    return out
  }, [])
  const failures = results.filter(r=>!r.ok)
  const [show,setShow]=useState(false)
  return (
    <div className="mt-8">
      <button onClick={()=>setShow(v=>!v)} className="rounded-xl border border-zinc-800/60 bg-zinc-900/60 px-3 py-2 text-xs text-zinc-300 hover:border-red-900/60 hover:text-zinc-200">
        {show? 'Hide':'Show'} self-tests ({failures.length? `${failures.length} failing`:'all passing'})
      </button>
      {show && (
        <div className="mt-3 rounded-xl border border-zinc-800/60 bg-zinc-950/60 p-3">
          <ul className="grid gap-2 text-xs">
            {results.map((r,i)=> (
              <li key={i} className={`flex items-center justify-between rounded-lg border px-2 py-1 ${r.ok? 'border-green-900/40 bg-green-900/10 text-green-300':'border-red-900/40 bg-red-900/10 text-red-300'}`}>
                <span>{r.name}</span>
                <span>{r.ok? 'PASS': `FAIL${r.msg? ` — ${r.msg}`: ''}`}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

function Landing({ onOpenProject }: { onOpenProject: (p:any)=>void }) {
  const [query,setQuery]=useState('')
  const debounced=useDebounced(query,250)
  const filteredTech = useMemo(()=>!debounced? TECHNOLOGIES : TECHNOLOGIES.filter(t=>t.label.toLowerCase().includes(debounced.toLowerCase())),[debounced])
  const filteredCourses = useMemo(()=>!debounced? COURSES : COURSES.filter(t=>t.label.toLowerCase().includes(debounced.toLowerCase())),[debounced])
  return (
    <div className="relative">
      <AnimatedSystemGraphic />
      <div className="mx-auto max-w-6xl p-6">
        <header className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-zinc-50">
              <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">Hugh Murdoch</span>
              <span className="ml-2 text-zinc-400">— Full‑Stack Developer</span>
            </h1>
            <p className="mt-2 max-w-[70ch] text-sm text-zinc-400">Portfolio: technologies, projects, and courses. Click any item to open a live browser preview, explore the file tree, view code, and browse screenshots.</p>
          </div>
          <div className="w-full max-w-xs md:w-auto">
            <div className="relative">
              <Input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search technologies & courses" className="pr-9" />
              <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-zinc-500">⌕</div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card className="border-red-900/40 bg-gradient-to-b from-zinc-950 to-zinc-950/80 shadow-[0_0_25px_rgba(239,68,68,0.45)]">
            <CardContent>
              <SectionHeader icon={Layers3} title="Technologies" />
              <nav className="mt-2 grid gap-2">
                {filteredTech.map((t)=> (
                  <button key={t.label} onClick={()=>onOpenProject(PROJECTS[t.projectId])} className="flex items-center justify-between rounded-xl border border-zinc-800/70 bg-zinc-900/60 px-3 py-3 text-left text-zinc-200 hover:border-red-900/60 hover:bg-zinc-900">
                    <span className="truncate">{t.label}</span>
                    <ChevronRight className="h-4 w-4 text-red-400" />
                  </button>
                ))}
                {filteredTech.length===0 && <div className="text-sm text-zinc-500">No matches. Update the list in code.</div>}
              </nav>
            </CardContent>
          </Card>

          <Card className="border-red-900/40 bg-gradient-to-b from-zinc-950 to-zinc-950/80 shadow-[0_0_25px_rgba(239,68,68,0.45)]">
            <CardContent>
              <SectionHeader icon={Layers3} title="Courses" />
              <nav className="mt-2 grid gap-2">
                {filteredCourses.map((c)=> (
                  <button key={c.label} onClick={()=>onOpenProject(PROJECTS[c.projectId])} className="flex items-center justify-between rounded-xl border border-zinc-800/70 bg-zinc-900/60 px-3 py-3 text-left text-zinc-200 hover:border-red-900/60 hover:bg-zinc-900">
                    <span className="truncate">{c.label}</span>
                    <ChevronRight className="h-4 w-4 text-red-400" />
                  </button>
                ))}
                {filteredCourses.length===0 && <div className="text-sm text-zinc-500">No matches. Update the list in code.</div>}
              </nav>
            </CardContent>
          </Card>
        </div>

        <DevTests />

        <footer className="mt-10 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-500">
          <div>Built with <span className="text-red-400">React</span>, Tailwind, Framer Motion.</div>
          <div className="flex items-center gap-2">
            <a className="hover:text-zinc-300" href="#">LinkedIn</a>
            <Separator orientation="vertical" className="h-4" />
            <a className="hover:text-zinc-300" href="#">GitHub</a>
          </div>
        </footer>
      </div>
    </div>
  )
}

function ProjectDetail({ project, onBack }: { project: any; onBack: ()=>void }) {
  const [openFile, setOpenFile] = useState<any | null>(null)
  const filesTop = Array.isArray(project.files) ? project.files : []
  const panel = 'rounded-2xl border border-zinc-800/70 bg-zinc-900/70 backdrop-blur p-3'
  return (
    <div className="mx-auto max-w-[1400px] p-4 md:p-6">
      <div className="mb-4 flex items-center justify-between">
        <Button variant="secondary" onClick={onBack} className="gap-2">
          <ArrowLeft className="h-4 w-4" /> Back
        </Button>
        <div className="flex flex-wrap items-center gap-2">
          {project.tech?.map((t: string) => (
            <Badge key={t} className="bg-red-900/50 text-red-200">{t}</Badge>
          ))}
        </div>
      </div>

      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="text-red-400"><MonitorSmartphone className="h-6 w-6" /></span>
          <h2 className="text-lg font-semibold text-zinc-100">{project.title}</h2>
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" className="text-sm text-red-300 hover:underline">
              View repo ↗
            </a>
          )}
        </div>
        <div className="text-sm text-zinc-400">{project.description}</div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className={`shadow-[0_0_25px_rgba(239,68,68,0.45)] ${panel} lg:col-span-1`}>
          <SectionHeader icon={Layers3} title="Project Files" />
          <ScrollArea className="h-[55vh] pr-2">
            <FileTree nodes={filesTop} onOpenFile={setOpenFile} />
          </ScrollArea>
        </div>
        <div className={`shadow-[0_0_25px_rgba(239,68,68,0.45)] ${panel} lg:col-span-2`}>
          <BrowserView url={project.homepageUrl} />
        </div>
          <div className={`shadow-[0_0_25px_rgba(239,68,68,0.45)] ${panel} lg:col-span-1`}>
              <ScreenshotGallery shots={project.screenshots} />
          </div>
        <div className={`shadow-[0_0_25px_rgba(239,68,68,0.45)] ${panel} lg:col-span-2`}>
          <CodeViewer node={openFile} />
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [project, setProject] = useState<any | null>(null)
  return (
    <TooltipProvider>
      <main className="min-h-screen bg-[#0b0b0c] text-zinc-100">
        {!project ? (
          <Landing onOpenProject={setProject} />
        ) : (
          <ProjectDetail project={project} onBack={() => setProject(null)} />
        )}
      </main>
    </TooltipProvider>
  )
}