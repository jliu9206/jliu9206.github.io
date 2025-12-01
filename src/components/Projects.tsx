interface Project {
  title: string
  tag: string
  description: string
  tech: string[]
  links: { label: string; url: string }[]
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'GoLang Distributed Cloud Storage Service',
      tag: 'Distributed Systems',
      description:
        'Developed a distributed cloud storage service using GoLang, integrating Redis for caching and MySQL in a master-slave configuration. Implemented resumable and multipart uploads with RabbitMQ for asynchronous file transfers and Ceph for scalable storage, resulting in 50% reduction in user wait time. Transformed into microservices architecture with Gin, gRPC, Docker, and Kubernetes.',
      tech: ['GoLang · gRPC · Docker', 'Redis · MySQL · RabbitMQ · Kubernetes'],
      links: [
        { label: 'GitHub repo →', url: 'https://github.com/jliu9206/GoLang-Google_Drive' },
      ],
    },
    {
      title: 'USC Subletting Platform',
      tag: 'Full-Stack Web',
      description:
        'Web application for students to list and search sublets with filters for dates, price, and proximity to campus. Designed the listing flow to minimize posting friction while keeping results relevant and easy to compare. Built with Java servlets, JavaScript, and SQL databases.',
      tech: ['Java · JavaScript · HTML/CSS', 'SQL · Servlets'],
      links: [
        { label: 'GitHub repo →', url: 'https://github.com/jliu9206/USC_Subletting_App' },
      ],
    },
    {
      title: 'Cocktail Explorer App',
      tag: 'Full-Stack Web',
      description:
        'Web application for exploring and discovering cocktail recipes with user authentication, favorites functionality, and detailed cocktail information. Features include user registration, login, search, and personalized favorite lists.',
      tech: ['PHP · JavaScript · CSS', 'SQL Database'],
      links: [
        { label: 'GitHub repo →', url: 'https://github.com/jliu9206/Cocktail_Explorer_App' },
      ],
    },
  ]

  return (
    <section id="projects">
      <div className="section-title">Selected Projects</div>
      <div className="section-subtitle">A few projects that reflect my interests and skills.</div>

      {projects.map((project, index) => (
        <div key={index} className="project">
          <div className="project-header">
            <div className="project-title">{project.title}</div>
            <div className="project-tag">{project.tag}</div>
          </div>
          <p className="project-desc">{project.description}</p>
          <div className="project-meta">
            {project.tech.map((tech, techIndex) => (
              <span key={techIndex}>● {tech}</span>
            ))}
          </div>
          <div className="project-links">
            {project.links.map((link, linkIndex) => (
              <a
                key={linkIndex}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mini-link"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default Projects

