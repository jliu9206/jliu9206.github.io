import { useState, useEffect } from 'react'

const Header = () => {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = "I am a Computer Science and Applied Mathematics student at USC Viterbi. My passion revolves around transforming complex problems into elegant technical solutions that benefit society. My fascination with computing stems from its unique power to create systemic change, whether through optimizing healthcare systems, developing fairer algorithms, or building assistive technologies."

  useEffect(() => {
    let currentIndex = 0
    const typingSpeed = 15

    const typeText = () => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1))
        currentIndex++
        setTimeout(typeText, typingSpeed)
      }
    }

    // Start typing after a short delay
    const timer = setTimeout(typeText, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <header>
      <div className="top-row">
        <div className="name-block">
          <h1>Yuekai (Justin) Liu</h1>
          <p>Computer Science & Applied Mathematics · University of Southern California</p>
          <div className="tags">
            <span className="tag">Distributed Systems</span>
            <span className="tag">Full-Stack Development</span>
            <span className="tag">Software Engineering</span>
          </div>
        </div>
        <div className="links">
          <a href="https://github.com/jliu9206" target="_blank" rel="noopener noreferrer" className="btn">
            GitHub
          </a>
          <a href="mailto:jliu9206@usc.edu" className="btn">
            Email
          </a>
        </div>
      </div>
      <p className="tagline">
        {displayedText}
        {displayedText.length < fullText.length && <span className="cursor">|</span>}
      </p>
      <style>{`
        .cursor {
          animation: blink 1s infinite;
          color: var(--accent);
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </header>
  )
}

export default Header

