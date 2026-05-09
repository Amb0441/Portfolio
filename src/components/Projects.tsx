import ProjectCard from './ProjectCard'
import type { Project } from '../types'

const projects: Project[] = [
  {
    id: '1',
    title: 'Project One',
    description: 'Full-stack web app with real-time features built on React and Node.js with WebSocket support.',
    tags: ['React', 'TypeScript', 'Node.js', 'WebSockets'],
    repoUrl: '#',
    liveUrl: '#',
  },
  {
    id: '2',
    title: 'Project Two',
    description: 'Data pipeline and analytics dashboard powered by PostgreSQL and a GraphQL API.',
    tags: ['Node.js', 'PostgreSQL', 'GraphQL', 'Recharts'],
    repoUrl: '#',
  },
  {
    id: '3',
    title: 'Project Three',
    description: 'CLI tool that automates scaffolding and enforces project conventions across a monorepo.',
    tags: ['TypeScript', 'CLI', 'Tooling'],
    repoUrl: '#',
    liveUrl: '#',
  },
]

function Projects() {
  return (
    <section id="projects">
      <div className="inner">
        <p className="section-label">Work</p>
        <h2 className="section-title">Selected projects</h2>
        <div className="project-list">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
