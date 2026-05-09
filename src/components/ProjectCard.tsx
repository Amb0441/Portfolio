import type { Project } from '../types'

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div>
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </article>
  )
}

export default ProjectCard
