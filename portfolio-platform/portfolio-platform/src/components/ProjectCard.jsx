import { Link } from 'react-router-dom'

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} />

      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <Link to={`/project/${project.id}`}>
          <button>View Details</button>
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard