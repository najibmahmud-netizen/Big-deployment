import { useState } from 'react'
import Header from '../components/Header'
import ProjectForm from '../components/ProjectForm'
import SearchBar from '../components/SearchBar'
import ProjectList from '../components/ProjectList'
import projectsData from '../data/projects'

function Home() {
  const [projects, setProjects] = useState(projectsData)
  const [searchTerm, setSearchTerm] = useState('')

  // Add project
  function addProject(newProject) {
    setProjects([...projects, newProject])
  }

  // Filter projects
  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container">
      <Header />

      <ProjectForm addProject={addProject} />

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <ProjectList projects={filteredProjects} />
    </div>
  )
}
export default Home