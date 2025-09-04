export type FileNode = { type: 'folder'|'file'; name: string; path: string; language?: string; code?: string; children?: FileNode[] }
export type Project = { id: string; title: string; description?: string; homepageUrl: string; repoUrl?: string; tech: string[]; tags?: string[]; files: FileNode[]; screenshots: {id: string; src: string; caption?: string}[] }

const SAMPLE_CODE = `import React from 'react';
export const Hello = () => <div style={{color:'#ef4444'}}>Hello, Portfolio!<\/div>;
export default function App(){return <main><Hello \/><\/main>}`

export const PROJECTS: Record<string, Project> = {
  demoBank: {
    id: 'demoBank',
    title: 'Banking Portal (Demo)',
    description: 'Sample full‑stack banking UI with account summary, transfers, and messaging.',
    homepageUrl: 'https://example.com',
    repoUrl: 'https://github.com/yourname/banking-portal',
    tech: ['React','TypeScript','Tailwind','Azure','Service Bus'],
    tags: ['FinTech','Microservices'],
    files: [
      { type: 'folder', name: 'src', path: 'src', children: [
        { type: 'folder', name: 'components', path: 'src/components', children: [
          { type: 'file', name: 'AccountCard.tsx', path: 'src/components/AccountCard.tsx', language: 'tsx', code: SAMPLE_CODE },
          { type: 'file', name: 'TransferForm.tsx', path: 'src/components/TransferForm.tsx', language: 'tsx', code: SAMPLE_CODE },
        ]},
        { type: 'folder', name: 'pages', path: 'src/pages', children: [
          { type: 'file', name: 'Home.tsx', path: 'src/pages/Home.tsx', language: 'tsx', code: SAMPLE_CODE },
        ]},
        { type: 'file', name: 'main.tsx', path: 'src/main.tsx', language: 'tsx', code: SAMPLE_CODE },
      ]},
      { type: 'file', name: 'tailwind.config.ts', path: 'tailwind.config.ts', language: 'ts', code: `export default { theme: { extend: {} } };` },
      { type: 'file', name: 'package.json', path: 'package.json', language: 'json', code: `{"name":"banking-portal"}` },
    ],
    screenshots: [
      { id: 's1', src: 'https://images.unsplash.com/photo-1522125670776-3c7abb882bc2?q=80&w=1200&auto=format&fit=crop', caption: 'Login page' },
      { id: 's2', src: 'https://images.unsplash.com/photo-1510519138101-570d1dca3d66?q=80&w=1200&auto=format&fit=crop', caption: 'Account dashboard' },
    ]
  },
  demoEcom: {
    id: 'demoEcom',
    title: 'E‑Commerce (Demo)',
    description: 'Storefront with product listing, cart, and checkout.',
    homepageUrl: 'https://example.org',
    repoUrl: 'https://github.com/yourname/ecommerce',
    tech: ['React','Node','PostgreSQL','Stripe'],
    tags: ['Retail'],
    files: [
      { type: 'folder', name: 'src', path: 'src', children: [
        { type: 'file', name: 'App.jsx', path: 'src/App.jsx', language: 'jsx', code: SAMPLE_CODE },
        { type: 'file', name: 'routes.js', path: 'src/routes.js', language: 'js', code: `export const routes = [];` },
      ]},
      { type: 'file', name: 'Dockerfile', path: 'Dockerfile', language: 'dockerfile', code: `FROM node:18-alpine` },
    ],
    screenshots: [
      { id: 'e1', src: 'https://images.unsplash.com/photo-1542500186-013c4a6b4f5a?q=80&w=1200&auto=format&fit=crop', caption: 'Product grid' },
      { id: 'e2', src: 'https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1200&auto=format&fit=crop', caption: 'Checkout' },
    ]
  }
}

export const TECHNOLOGIES = [
  { label: 'React + Azure Banking Portal', projectId: 'demoBank' },
  { label: 'React + Node E‑Commerce', projectId: 'demoEcom' },
]

export const COURSES = [
  { label: 'Advanced React Patterns (Project: Banking Portal)', projectId: 'demoBank' },
  { label: 'Full‑Stack JS Capstone (Project: E‑Commerce)', projectId: 'demoEcom' },
]