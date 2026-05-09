export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  liveUrl?: string
  repoUrl?: string
}

export interface ExperienceEntry {
  id: string
  role: string
  company: string
  period: string
  description: string
}

export interface Skill {
  name: string
  category: string
}
