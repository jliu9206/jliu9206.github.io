# Yuekai (Justin) Liu - Personal Portfolio

A modern, interactive personal portfolio website built with React, TypeScript, and Vite.

## Features

- ✨ **Modern UI/UX** - Beautiful glassmorphism design with smooth animations
- 🎯 **TypeScript** - Fully typed for better development experience
- ⚡ **Vite** - Lightning-fast build tool and dev server
- 🎨 **Animations** - Fade-in effects, hover animations, and typewriter effect
- 📱 **Responsive** - Works perfectly on all devices
- 🚀 **GitHub Pages Ready** - Easy deployment to GitHub Pages

## Tech Stack

- React 18
- TypeScript
- Vite
- CSS3 (with animations)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/jliu9206/jliu9206.github.io.git
cd jliu9206.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Building for Production

To build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. Create a `.github/workflows/deploy.yml` file (if not exists)
2. Push your changes to the main branch
3. GitHub Actions will automatically build and deploy

### Option 2: Manual Deployment

```bash
npm run build
```

Then push the `dist` folder contents to the `gh-pages` branch or use the deploy script:

```bash
npm run deploy
```

## Project Structure

```
├── src/
│   ├── components/      # React components
│   │   ├── Header.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Leadership.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx         # Main app component
│   ├── App.css         # Component styles
│   ├── main.tsx        # Entry point
│   └── index.css      # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies
├── tsconfig.json       # TypeScript config
└── vite.config.ts      # Vite config
```

## Customization

To customize the content:

1. **Personal Information**: Edit `src/components/Header.tsx`
2. **About Section**: Edit `src/components/About.tsx`
3. **Projects**: Edit `src/components/Projects.tsx`
4. **Experience**: Edit `src/components/Experience.tsx`
5. **Leadership**: Edit `src/components/Leadership.tsx`
6. **Contact**: Edit `src/components/Contact.tsx`
7. **Styling**: Edit `src/App.css` and `src/index.css`

## License

This project is open source and available under the MIT License.

## Contact

Yuekai (Justin) Liu - jliu9206@usc.edu

Project Link: [https://github.com/jliu9206/jliu9206.github.io](https://github.com/jliu9206/jliu9206.github.io)

