import ProjectCard from './ProjectCard'
import type { Project } from '../types'

const projects: Project[] = [
  {
    id: '1',
    title: 'Project One',
    description: 'Description of project one.',
    tags: ['React', 'TypeScript'],
  },
  {
    id: '2',
    title: 'Project Two',
    description: 'Description of project two.',
    tags: ['Node.js', 'PostgreSQL'],
  },
]

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
