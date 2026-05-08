import { useState } from 'react'

function ProjectForm({ addProject }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if (!title || !description) return

    const newProject = {
      id: Date.now(),
      title,
      description,
      image: 'https://picsum.photos/300/200',
      technologies: ['React']
    }

    addProject(newProject)

    setTitle('')
    setDescription('')
  }

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <h2>Add Project</h2>

      <input
        type="text"
        placeholder="Project Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Project Description"
        value={description}
onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Add Project</button>
    </form>
  )
}

export default ProjectForm