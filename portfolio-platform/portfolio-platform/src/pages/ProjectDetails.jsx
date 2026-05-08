import { useParams, Link } from 'react-router-dom'
import projectsData from '../data/projects'

function ProjectDetails() {
  const { id } = useParams()

  const project = projectsData.find(
    project => project.id === Number(id)
  )

  if (!project) {
    return <h2>Project not found</h2>
  }

  return (
    <div className="details-page">
      <img src={project.image} alt={project.title} />

      <h1>{project.title}</h1>

      <p>{project.description}</p>

      <h3>Technologies Used</h3>

      <ul>
        {project.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>

      <Link to="/">
        <button>Back Home</button>
      </Link>
</div>
  )
}

export default ProjectDetails