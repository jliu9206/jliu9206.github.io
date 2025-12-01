interface ExperienceItem {
  title: string
  meta: string
  description: string
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: 'Software Engineering Intern',
      meta: 'Wonders Information Co., Ltd · Shanghai, China · July 2025 - August 2025',
      description:
        'Implemented real-time alerting with Quartz scheduler for automated job execution and multi-channel communication (SMTP, SMS, WeCom) in a multi-module Maven enterprise monitoring platform. Resolved SMTP rate-limiting issues by refactoring mail service to use BCC functionality, reducing individual email sends by 85%. Developed custom logical time management class integrated with Quartz scheduler for hospital monitoring systems.',
    },
    {
      title: 'Front-End Development Intern',
      meta: 'UCloud Technology Co., Ltd. · Shanghai, China · May 2024 - July 2024',
      description:
        'Implemented new pages for UCloud official website using React.js and Next.js, optimizing performance and SEO. Provided front-end solutions for IPV6 inputs with Redux and RxJS, boosting real-time page responsiveness by 25%. Optimized monitor-chart components and integrated i18next translations into microservices architecture.',
    },
    {
      title: 'Supply Chain Data Analyst Intern',
      meta: 'Shanghai Roche Pharmaceutical Ltd. · Shanghai, China · July 2023 – August 2023',
      description:
        'Directed master production scheduling in SAP system based on sales forecasts and production capacity. Collaborated with Roche Basel planners to optimize supply chain for active pharmaceutical ingredients, contributing to a 15% reduction in average operation lead time.',
    },
  ]

  return (
    <section id="experience">
      <div className="section-title">Experience</div>
      {experiences.map((exp, index) => (
        <div key={index} className="exp-item">
          <div className="exp-title">{exp.title}</div>
          <div className="exp-meta">{exp.meta}</div>
          <p className="exp-desc">{exp.description}</p>
        </div>
      ))}
    </section>
  )
}

export default Experience

