import type { Project } from '../types'

interface ProjectCardProps {
  project: Project
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="project-card">
      <span className="index">{String(index + 1).padStart(2, '0')}</span>
      <div>
        <h3>{project.title}</h3>
        <p className="desc">{project.description}</p>
        <p className="tags">{project.tags.join(' · ')}</p>
      </div>
      <div className="links">
        {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noreferrer">Repo ↗</a>}
        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live ↗</a>}
      </div>
    </article>
  )
}

export default ProjectCard
