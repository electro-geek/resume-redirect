# Portfolio - Mritunjay Sharma

A modern terminal-themed portfolio showcasing my experience, skills, and projects as a Backend Engineer.

## 🚀 Live Demo

[View Live Portfolio](https://your-portfolio.vercel.app) *(Update after deployment)*

## 📁 Repository Structure

```
resume-redirect/
├── app/              # Main portfolio application (Vite + React)
│   ├── src/          # Source code
│   ├── public/       # Static assets
│   └── dist/         # Production build (generated)
├── legacy/           # Legacy code (not deployed)
├── vercel.json       # Vercel deployment configuration
├── .vercelignore     # Files excluded from deployment
└── DEPLOYMENT.md     # Detailed deployment guide
```

## 🛠️ Tech Stack

- **Frontend**: React 19
- **Build Tool**: Vite 7
- **Styling**: CSS with terminal theme aesthetics
- **Deployment**: Vercel
- **Animations**: Custom CSS animations with terminal effects

## 🎨 Features

- ✨ Terminal-inspired UI design
- 💼 Professional portfolio sections:
  - Header with ASCII art
  - Summary & About
  - Skills showcase
  - Work Experience timeline
  - Projects portfolio
  - Education background
- 🎭 Custom loader animation
- 📱 Fully responsive design
- ⚡ Fast loading and optimized performance
- 🔄 Smooth section transitions

## 🏃‍♂️ Running Locally

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd resume-redirect

# Navigate to app directory
cd app

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to view the portfolio.

### Build for Production

```bash
cd app
npm run build
npm run preview  # Preview production build locally
```

## 🚀 Deployment

This portfolio is configured for easy deployment on Vercel.

### Quick Deploy

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy! (Vercel auto-detects configuration)

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

## 📦 Project Scripts

Inside the `app/` directory:

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 Customization

To customize this portfolio for yourself:

1. Update personal information in `app/src/components/Header.jsx`
2. Modify skills in `app/src/components/Skills.jsx`
3. Add your experience in `app/src/components/Experience.jsx`
4. Showcase your projects in `app/src/components/Projects.jsx`
5. Update education in `app/src/components/Education.jsx`
6. Customize the summary in `app/src/components/Summary.jsx`

## 🎨 Theme Customization

The color scheme and styling can be customized in:
- `app/src/index.css` - Global styles and CSS variables
- Component-specific `.css` files for individual sections

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

- **Email**: mritunjaypandey0789@gmail.com
- **Phone**: +91 6378768400
- **GitHub**: [github.com/electro-geek](https://github.com/electro-geek)
- **LinkedIn**: [linkedin.com/in/electro-geek](https://linkedin.com/in/electro-geek)
- **Portfolio**: [electro-geek.github.io/MP](https://electro-geek.github.io/MP)

---

Built with ❤️ using React + Vite | Terminal Theme © 2025
