import { describe, it, expect } from 'vitest'
import { PROJECTS } from '../src/data/projects'

describe('project data sanity', () => {
  it('has at least one project', () => {
    expect(Object.keys(PROJECTS).length).toBeGreaterThan(0)
  })

  it('each project includes required fields', () => {
    for (const [id, p] of Object.entries(PROJECTS)) {
      expect(p.id).toBeTruthy()
      expect(p.title).toBeTruthy()
      expect(p.homepageUrl).toBeTruthy()
    }
  })

  it('file paths are unique within a project', () => {
    for (const [id, p] of Object.entries(PROJECTS)) {
      const seen = new Set<string>()
      const walk = (nodes: any[] = []) => {
        for (const n of nodes) {
          if (seen.has(n.path)) throw new Error(`Duplicate path in ${id}: ${n.path}`)
          seen.add(n.path)
          if (n.children) walk(n.children)
        }
      }
      walk(p.files || [])
    }
  })
})