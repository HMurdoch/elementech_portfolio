export type FileNode = { type: 'folder'|'file'; name: string; path: string; language?: string; code?: string; children?: FileNode[] }
export type Project = { id: string; title: string; description?: string; homepageUrl: string; repoUrl?: string; tech: string[]; tags?: string[]; files: FileNode[]; screenshots: {id: string; src: string; caption?: string}[] }

const SAMPLE_CODE = `import React from 'react';
export const Hello = () => <div style={{color:'#ef4444'}}>Hello, Portfolio!<\/div>;
export default function App(){return <main><Hello \/><\/main>}`

const TECHNOLOGY_VANILLA_JS_SRC_COUNTER_JS =
    `export function setupCounter(element) {\r\n  let counter = 0\r\n  const setCounter = (count) => {\r\n    counter = count\r\n    element.innerHTML = \`count is \${counter}\`\r\n  }\r\n  element.addEventListener('click', () => setCounter(counter + 1))\r\n  setCounter(0);\r\n}`;

const TECHNOLOGY_VANILLA_JS_SRC_MAIN_JS =
    `import './style.css'\nimport javascriptLogo from './javascript.svg'\nimport viteLogo from '/vite.svg'\nimport { setupCounter } from './counter.js'\n\ndocument.querySelector('#app').innerHTML = \`\n  <div>\n    <a href="https://vite.dev" target="_blank">\n      <img src="\${viteLogo}" class="logo" alt="Vite logo" />\n    </a>\n    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">\n      <img src="\${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />\n    </a>\n    <h1>Hello Vite!</h1>\n    <div class="card">\n      <button id="counter" type="button"></button>\n    </div>\n    <p class="read-the-docs">\n      Click on the Vite logo to learn more\n    </p>\n  </div>\n\`\n\nsetupCounter(document.querySelector('#counter'))\n`;

const TECHNOLOGY_VANILLA_JS_SRC_STYLE_CSS =
    `:root {\n  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;\n  line-height: 1.5;\n  font-weight: 400;\n\n  color-scheme: light dark;\n  color: rgba(255, 255, 255, 0.87);\n  background-color: #242424;\n\n  font-synthesis: none;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\na {\n  font-weight: 500;\n  color: #646cff;\n  text-decoration: inherit;\n}\na:hover {\n  color: #535bf2;\n}\n\nbody {\n  margin: 0;\n  display: flex;\n  place-items: center;\n  min-width: 320px;\n  min-height: 100vh;\n}\n\nh1 {\n  font-size: 3.2em;\n  line-height: 1.1;\n}\n\n#app {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 2rem;\n  text-align: center;\n}\n\n.logo {\n  height: 6em;\n  padding: 1.5em;\n  will-change: filter;\n  transition: filter 300ms;\n}\n.logo:hover {\n  filter: drop-shadow(0 0 2em #646cffaa);\n}\n.logo.vanilla:hover {\n  filter: drop-shadow(0 0 2em #f7df1eaa);\n}\n\n.card {\n  padding: 2em;\n}\n\n.read-the-docs {\n  color: #888;\n}\n\nbutton {\n  border-radius: 8px;\n  border: 1px solid transparent;\n  padding: 0.6em 1.2em;\n  font-size: 1em;\n  font-weight: 500;\n  font-family: inherit;\n  background-color: #1a1a1a;\n  cursor: pointer;\n  transition: border-color 0.25s;\n}\nbutton:hover {\n  border-color: #646cff;\n}\nbutton:focus,\nbutton:focus-visible {\n  outline: 4px auto -webkit-focus-ring-color;\n}\n\n@media (prefers-color-scheme: light) {\n  :root {\n    color: #213547;\n    background-color: #ffffff;\n  }\n  a:hover {\n    color: #747bff;\n  }\n  button {\n    background-color: #f9f9f9;\n  }\n}\n`;

const TECHNOLOGY_VANILLA_JS_INDEX_HTML =
    `<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <title>Vanilla JavaScript</title>\r\n    <meta charset="UTF-8" />\r\n    <link rel="stylesheet" href="styles.css" />\r\n    <script src="index.js" type="module"></script>\r\n</head>\r\n\r\n<body>\r\n<header>\r\n    <img src="js-logo-xs.png" alt="JavaScript logo" />\r\n    <div>\r\n        <h1>Vanilla JavaScript</h1>\r\n        <p>i.e., JavaScript without any (UI) framework or library</p>\r\n    </div>\r\n</header>\r\n\r\n<div id="tabs">\r\n    <menu>\r\n        <button id="btn-why-react" class="active">Why React?</button>\r\n        <button id="btn-core-features">Core Features</button>\r\n        <button id="btn-resources">Related Resources</button>\r\n    </menu>\r\n    <div id="tab-content"></div>\r\n</div>\r\n</body>\r\n</html>`;

const TECHNOLOGY_VANILLA_JS_INDEX_JS =
    `const content = [\r\n    [\r\n        "React is extremely popular",\r\n        "It makes building complex, interactive UIs a breeze",\r\n        "It's powerful & flexible",\r\n        "It has a very active and versatile ecosystem"\r\n    ],\r\n    [\r\n        "Components, JSX & Props",\r\n        "State",\r\n        "Hooks (e.g., useEffect())",\r\n        "Dynamic rendering"\r\n    ],\r\n    [\r\n        "Official web page (react.dev)",\r\n        "Next.js (Fullstack framework)",\r\n        "React Native (build native mobile apps with React)"\r\n    ]\r\n];\r\n\r\nconst btnWhyReact = document.getElementById("btn-why-react");\r\nconst btnCoreFeature = document.getElementById("btn-core-features");\r\nconst btnResources = document.getElementById("btn-resources");\r\nconst tabContent = document.getElementById("tab-content");\r\n\r\nfunction displayContent(items) {\r\n    let listContent = "";\r\n    for (const item of items) {\r\n        listContent += \`<li>\${item}</li>\`;\r\n    }\r\n    const list = document.createElement("ul");\r\n    tabContent.innerHTML = ""; // clear existing content\r\n    list.innerHTML = listContent; // insert new content\r\n    tabContent.append(list);\r\n}\r\n\r\nfunction highlightButton(btn) {\r\n    // Clear all existing styling / highlights\r\n    btnWhyReact.className = "";\r\n    btnCoreFeature.className = "";\r\n    btnResources.className = "";\r\n    btn.className = "active"; // set new style / highlight\r\n}\r\n\r\nfunction handleClick(event) {\r\n    const btnId = event.target.id;\r\n    highlightButton(event.target);\r\n    if (btnId === "btn-why-react") {\r\n        displayContent(content[0]);\r\n    } else if (btnId === "btn-core-features") {\r\n        displayContent(content[1]);\r\n    } else {\r\n        displayContent(content[2]);\r\n    }\r\n}\r\n\r\ndisplayContent(content[0]); // initially show this content\r\n\r\nbtnWhyReact.addEventListener("click", handleClick);\r\nbtnCoreFeature.addEventListener("click", handleClick);\r\nbtnResources.addEventListener("click", handleClick);`;

const TECHNOLOGY_VANILLA_JS_PACKAGE_JSON =
    '{\n  "name": "vanilla_js",\n  "private": true,\n  "version": "0.0.0",\n  "type": "module",\n  "scripts": {\n    "dev": "vite --port 8001",\n    "build": "vite build",\n    "preview": "vite preview"\n  },\n  "devDependencies": {\n    "@babel/core": "7.2.0",\n    "typescript": "4.4.4",\n    "vite": "^7.1.2"\n  },\n  "dependencies": {\n    "express": "^5.1.0"\n  }\n}\n';

const TECHNOLOGY_VANILLA_JS_STYLES_CSS =
    '* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: sans-serif;\r\n    background-color: #181c1f;\r\n    color: #bdd1d4;\r\n    margin: 2rem;\r\n}\r\n\r\nheader {\r\n    margin: 2rem 0;\r\n    display: flex;\r\n    gap: 1.5rem;\r\n    align-items: center;\r\n}\r\n\r\nheader img {\r\n    width: 3rem;\r\n    object-fit: contain;\r\n}\r\n\r\nheader h1 {\r\n    margin: 0;\r\n    color: #f3e248;\r\n}\r\n\r\nheader p {\r\n    margin: 0;\r\n    color: #dbd7b1;\r\n}\r\n\r\n#tabs {\r\n    max-width: 32rem;\r\n    margin: 2rem 0;\r\n    overflow: hidden;\r\n}\r\n\r\n#tabs menu {\r\n    margin: 0;\r\n    padding: 0;\r\n    display: flex;\r\n    gap: 0.25rem;\r\n}\r\n\r\n#tabs button {\r\n    font: inherit;\r\n    font-size: 0.85rem;\r\n    background-color: #282f33;\r\n    border: none;\r\n    border-bottom-color: #f3e248;\r\n    color: #e0eff1;\r\n    border-radius: 4px 4px 0 0;\r\n    padding: 0.75rem 1rem;\r\n    cursor: pointer;\r\n    transition: all 0.2s ease-out;\r\n}\r\n\r\n#tabs button:hover,\r\n#tabs button.active {\r\n    background-color: #f3e248;\r\n    color: #273133;\r\n}\r\n\r\n#tab-content {\r\n    background-color: #2d3942;\r\n    border-radius: 0 4px 4px 4px;\r\n    padding: 1rem;\r\n}\r\n\r\n#tab-content li {\r\n    margin: 0.75rem 0;\r\n}';

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
  },
  technologyVanillaJS: {
      id: 'technologyVanillaJS',
      title: 'Vanilla JS',
      description: 'Sample overview of Vanilla Javascript',
      homepageUrl: 'https://elementech-technology-vanilla-js.onrender.com/',
      repoUrl: 'https://github.com/HMurdoch/elementech-technology-vanilla_js/tree/master',
      tech: ['React', 'Node', 'Javascript'],
      tags: ['FinTech', 'Microservices'],
      files: [
          {
              type: 'folder', name: 'vanilla_js', path: 'src/data/technologies/vanilla_js', children: [
                  {
                      type: 'folder', name: 'src', path: 'src/data/technologies/vanilla_js/src', children: [
                          { type: 'file', name: 'counter.js', path: 'src/data/technologies/vanilla_js/src/counter.js', language: 'js', code: TECHNOLOGY_VANILLA_JS_SRC_COUNTER_JS },
                          { type: 'file', name: 'main.js', path: 'src/data/technologies/vanilla_js/src/main.js', language: 'js', code: TECHNOLOGY_VANILLA_JS_SRC_MAIN_JS },
                          { type: 'file', name: 'style.css', path: 'src/data/technologies/vanilla_js/src/styles.css', language: 'css', code: TECHNOLOGY_VANILLA_JS_SRC_STYLE_CSS },
                      ]
                  }
              ]
          },
          { type: 'file', name: 'index.html', path: 'src/data/technologies/vanilla_js/index.html', language: 'html', code: TECHNOLOGY_VANILLA_JS_INDEX_HTML },
          { type: 'file', name: 'index.js', path: 'src/data/technologies/vanilla_js/index.js', language: 'js', code: TECHNOLOGY_VANILLA_JS_INDEX_JS },
          { type: 'file', name: 'package.json', path: 'src/data/technologies/vanilla_js/package.json', language: 'json', code: TECHNOLOGY_VANILLA_JS_PACKAGE_JSON },
          { type: 'file', name: 'styles.css', path: 'src/data/technologies/vanilla_js/styles.css', language: 'css', code: TECHNOLOGY_VANILLA_JS_STYLES_CSS },
      ],
      screenshots: [
          { id: 's1', src: 'src/images/vanilla_js/screenshot01.png', caption: 'Tab 1' },
          { id: 's2', src: 'src/images/vanilla_js/screenshot02.png', caption: 'Tab 2' },
          { id: 's2', src: 'src/images/vanilla_js/screenshot03.png', caption: 'Tab 3' },
      ]
    },
    technologyReactJS: {
        id: 'technologyReactJS',
        title: 'Vanilla JS',
        description: 'Sample overview of Vanilla Javascript',
        homepageUrl: 'https://elementech-technology-vanilla-js.onrender.com/',
        repoUrl: 'https://github.com/HMurdoch/elementech-technology-vanilla_js/tree/master',
        tech: ['React', 'Node', 'Javascript'],
        tags: ['FinTech', 'Microservices'],
        files: [
            {
                type: 'folder', name: 'vanilla_js', path: 'src/data/technologies/vanilla_js', children: [
                    {
                        type: 'folder', name: 'src', path: 'src/data/technologies/vanilla_js/src', children: [
                            { type: 'file', name: 'counter.js', path: 'src/data/technologies/vanilla_js/src/counter.js', language: 'js', code: TECHNOLOGY_VANILLA_JS_SRC_COUNTER_JS },
                            { type: 'file', name: 'main.js', path: 'src/data/technologies/vanilla_js/src/main.js', language: 'js', code: TECHNOLOGY_VANILLA_JS_SRC_MAIN_JS },
                            { type: 'file', name: 'style.css', path: 'src/data/technologies/vanilla_js/src/styles.css', language: 'css', code: TECHNOLOGY_VANILLA_JS_SRC_STYLE_CSS },
                        ]
                    }
                ]
            },
            { type: 'file', name: 'index.html', path: 'src/data/technologies/vanilla_js/index.html', language: 'html', code: TECHNOLOGY_VANILLA_JS_INDEX_HTML },
            { type: 'file', name: 'index.js', path: 'src/data/technologies/vanilla_js/index.js', language: 'js', code: TECHNOLOGY_VANILLA_JS_INDEX_JS },
            { type: 'file', name: 'package.json', path: 'src/data/technologies/vanilla_js/package.json', language: 'json', code: TECHNOLOGY_VANILLA_JS_PACKAGE_JSON },
            { type: 'file', name: 'styles.css', path: 'src/data/technologies/vanilla_js/styles.css', language: 'css', code: TECHNOLOGY_VANILLA_JS_STYLES_CSS },
        ],
        screenshots: [
            { id: 's1', src: 'src/images/vanilla_js/screenshot01.png', caption: 'Tab 1' },
            { id: 's2', src: 'src/images/vanilla_js/screenshot02.png', caption: 'Tab 2' },
            { id: 's2', src: 'src/images/vanilla_js/screenshot03.png', caption: 'Tab 3' },
        ]
    },
}

export const TECHNOLOGIES = [
//  { label: 'React + Azure Banking Portal', projectId: 'demoBank' },
//  { label: 'React + Node E‑Commerce', projectId: 'demoEcom' },
    { label: 'Vanilla JS Example', projectId: 'technologyVanillaJS' },
    { label: 'React JS Example', projectId: 'technologyReactJS' }
];

export const COURSES = [
  { label: 'Advanced React Patterns (Project: Banking Portal)', projectId: 'demoBank' },
  { label: 'Full‑Stack JS Capstone (Project: E‑Commerce)', projectId: 'demoEcom' },
]