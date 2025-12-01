interface LeadershipItem {
  title: string
  meta: string
  description: string
}

const Leadership = () => {
  const leadershipRoles: LeadershipItem[] = [
    {
      title: 'President',
      meta: 'Eta Omega Chi (HOX) · Los Angeles, CA · August 2023 – Present',
      description:
        'Collaborate with 10 active members to maintain the HOX official website and complete documents for resource management applications. Lead 8 members in practicing data structure exercises and learning software development frameworks. Previously served as VP of Administration, managing financial accounts and overseeing organizational operations.',
    },
    {
      title: 'Course Producer',
      meta: 'Viterbi Learning Program, USC · Los Angeles, CA · Jan 2025 - May 2025',
      description:
        'Host weekly office hours for students in USC CSCI 356 (Introduction to Computer Systems). Grade homework and exams under professor guidance, supporting student learning and academic success.',
    },
  ]

  return (
    <section id="leadership">
      <div className="section-title">Leadership</div>
      {leadershipRoles.map((role, index) => (
        <div key={index} className="exp-item">
          <div className="exp-title">{role.title}</div>
          <div className="exp-meta">{role.meta}</div>
          <p className="exp-desc">{role.description}</p>
        </div>
      ))}
    </section>
  )
}

export default Leadership

