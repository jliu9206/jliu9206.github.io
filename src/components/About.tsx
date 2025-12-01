const About = () => {
  const skills = [
    'C++ / Java / Python',
    'GoLang / TypeScript',
    'React.js / Next.js',
    'Docker / Kubernetes',
    'Redis / RabbitMQ',
    'Spring Boot / Node.js',
  ]

  return (
    <section id="about">
      <div className="section-title">About</div>
      <p className="about-text">
        I'm an undergraduate student pursuing dual degrees in Computer Science and Applied Mathematics at USC Viterbi School of Engineering, maintaining a 3.96 GPA. My interests span distributed systems, full-stack development, and software engineering. I enjoy building scalable applications and solving complex problems through elegant technical solutions.
      </p>
      <div className="pill-row">
        {skills.map((skill, index) => (
          <span key={index} className="pill">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default About

