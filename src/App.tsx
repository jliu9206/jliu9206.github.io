import { useEffect } from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Leadership from './components/Leadership'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          entry.target.classList.remove('hidden')
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll('section')
    sections.forEach((section) => {
      section.classList.add('hidden')
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return (
    <div className="page">
      <div className="glass">
        <Header />
        <main>
          <div>
            <About />
            <Projects />
          </div>
          <div>
            <Experience />
            <Leadership />
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App

