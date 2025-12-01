const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      © {currentYear} Yuekai (Justin) Liu · Built with React, TypeScript & GitHub Pages
    </footer>
  )
}

export default Footer

