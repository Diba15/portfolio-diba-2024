# 🌐 Dimas Bagas Saputro - Personal Portfolio

[![Vue.js](https://img.shields.io/badge/Vue.js-3.5.12-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.10-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4.15-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Axios](https://img.shields.io/badge/Axios-1.7.8-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

A modern, fast, and responsive personal portfolio website showcasing my skills, professional work experience, academic education, certificates, and completed projects as a Frontend Developer.

---

## 📑 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Pages & Navigation](#-pages--navigation)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development Server](#development-server)
  - [Production Build](#production-build)
  - [Linting and Formatting](#linting-and-formatting)
- [API Integration](#-api-integration)
- [Author & Socials](#-author--socials)

---

## ✨ Features

- **⚡ Fast & Modern Architecture**: Powered by Vue 3 (Composition API with `<script setup>`) and Vite for lightning-fast HMR and bundle optimization.
- **🎨 Responsive & Sleek Dark UI**: Styled using Tailwind CSS and custom animations with mobile-friendly design and bottom navigation.
- **🔤 Interactive Typing Effect**: Dynamic hero banner powered by `vue-typical`.
- **🔄 Dynamic Data via REST API**: Work experience, education, certificates, and portfolio projects fetched dynamically using Axios.
- **📄 Client-Side Pagination**: Clean pagination for large lists of experience, certificates, and projects.
- **📊 Real-time Monitoring**: Integrated with Vercel Web Analytics and Speed Insights.

---

## 🛠️ Tech Stack

### Frontend Core
- **Framework**: [Vue 3](https://vuejs.org/) (`^3.5.12`) with Composition API
- **Build Tool**: [Vite](https://vitejs.dev/) (`^5.4.10`)
- **Routing**: [Vue Router 4](https://router.vuejs.org/) (`^4.4.5`)

### Styling & UI
- **CSS Framework**: [Tailwind CSS](https://tailwindcss.com/) (`^3.4.15`)
- **Icons**: [PrimeIcons](https://primevue.org/icons/) (`^7.0.0`)
- **Fonts**: Raleway, Montserrat, Bebas Neue, Space Grotesk
- **Animations**: CSS3 Keyframes & [vue-typical](https://github.com/anthonygore/vue-typical)

### Data & Services
- **HTTP Client**: [Axios](https://axios-http.com/) (`^1.7.8`)
- **Backend API**: REST API hosted on Vercel (`https://port-api-liard.vercel.app/`)
- **Performance & Analytics**: `@vercel/analytics`, `@vercel/speed-insights`

### Code Quality
- **Linter**: ESLint 9 Flat Config (`eslint.config.js`)
- **Formatter**: Prettier

---

## 📂 Project Structure

```text
portfolio-diba-2024/
├── public/                     # Static assets & icons
│   ├── favicon.ico
│   ├── icon.ico
│   ├── images/                 # Project showcase images
│   └── robots.txt
├── src/
│   ├── assets/                 # Global styles, fonts, and brand assets
│   │   ├── base.css            # Tailwind directives
│   │   ├── main.css            # Custom fonts & scrollbar styling
│   │   ├── Icon/               # Tech stack icons (Vue, Express, Mongo, etc.)
│   │   └── Dimas.png           # Profile avatar
│   ├── components/             # Reusable Vue components
│   │   ├── Navbar.vue          # Top header & desktop navigation
│   │   ├── BottomNavigation.vue # Mobile bottom sticky nav
│   │   ├── Footer.vue          # Footer with wave SVG & social links
│   │   ├── CustomCard.vue      # Portfolio project card
│   │   └── icons/              # Custom SVG/Icon components
│   ├── pages/                  # Route views
│   │   ├── Home.vue            # Hero section & core skills
│   │   ├── About.vue           # Bio, Work Experience, Education & Certificates
│   │   ├── Work.vue            # Project showcase & external links
│   │   └── NotFound.vue        # 404 error page
│   ├── services/               # API service layer
│   │   └── model/
│   │       ├── Certificate.js  # Certificate API endpoints
│   │       ├── Project.js      # Project API endpoints
│   │       ├── Student.js      # Education API endpoints
│   │       └── Work.js         # Work Experience API endpoints
│   ├── http-service.js         # Configured Axios instance
│   ├── App.vue                 # Root application component
│   └── main.js                 # App entry point & router configuration
├── eslint.config.js            # ESLint 9 configuration
├── index.html                  # HTML entry point
├── package.json                # Project dependencies and scripts
├── tailwind.config.js          # Tailwind CSS configuration
├── vercel.json                 # Vercel SPA routing rewrite rules
└── vite.config.js              # Vite configuration
```

---

## 🧭 Pages & Navigation

| Route | Page | Description |
| :--- | :--- | :--- |
| `/` | **Home** | Hero introduction with animated typing effect and tech stack badges. |
| `/About` | **Profile / About** | Detailed bio, career history, Telkom University education, and accredited certifications. |
| `/Work` | **Projects** | Dynamic portfolio items featuring live website links, source code repositories, and development status. |
| `/*` | **404 Not Found** | Fallback route for undefined paths. |

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version `18.x` or later recommended)
- [npm](https://www.npmjs.com/) (version `9.x` or later) or `pnpm`/`yarn`

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Diba15/portfolio-diba-2024.git
   cd portfolio-diba-2024
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Run the local Vite development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### Production Build

Compile and minify the project for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The compiled files will be output to the `dist/` directory, ready to be deployed to Vercel, Netlify, or GitHub Pages.

### Linting and Formatting

Run ESLint to check and fix code style issues:

```bash
npm run lint
```

Format code using Prettier:

```bash
npm run format
```

---

## 🔗 API Integration

The application consumes data from a RESTful API service:
- Base URL: `https://port-api-liard.vercel.app/`
- Endpoints:
  - `GET /projects` - Fetches portfolio project listings
  - `GET /works` - Fetches professional work history
  - `GET /students` - Fetches educational background
  - `GET /certificates` - Fetches certifications & credentials

---

## 👨‍💻 Author & Socials

**Dimas Bagas Saputro**
- 🌐 GitHub: [@Diba15](https://github.com/Diba15)
- 💼 LinkedIn: [Dimas Bagas Saputro](https://www.linkedin.com/in/dimas-bagas-saputro-b2185373/)
- 📷 Instagram: [@dimazzbagazz](https://www.instagram.com/dimazzbagazz/)
- ✉️ Email: [dimaabagas73@gmail.com](mailto:dimaabagas73@gmail.com)

---

## 📄 License

This project is personal portfolio work. All rights reserved &copy; 2024 Dimas Bagas Saputro.
