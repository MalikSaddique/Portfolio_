# Muhammad Siddique — Portfolio Website

A modern, responsive personal portfolio website built with Next.js 15, React 19, and Tailwind CSS. Features smooth animations, dark/light theme toggle, and a clean, professional design.

## Live Demo

[View Live Site](https://muhammad-siddique.vercel.app/) 

## Features

- **Modern Tech Stack** — Built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS
- **Responsive Design** — Fully optimized for mobile, tablet, and desktop screens
- **Dark/Light Theme** — Toggle between themes with smooth transitions
- **Smooth Animations** — Powered by Framer Motion and GSAP with scroll-triggered effects
- **Interactive Project Carousel** — Swiper.js-based project showcase with flip cards
- **Smooth Scrolling** — Lenis integration for buttery smooth scroll experience
- **Contact Form** — Functional contact form with API route
- **SEO Optimized** — Proper meta tags, Open Graph, and semantic HTML
- **Performance Focused** — Optimized images, lazy loading, and minimal bundle size
- **CI/CD Ready** — GitHub Actions workflow for automated testing and Docker builds
- **Docker Support** — Multi-stage Dockerfile for containerized deployment



## Sections

- **Hero** — Animated introduction with typewriter effect and profile image
- **About** — Professional summary with animated statistics
- **Skills** — Technical expertise with proficiency bars and tech marquee
- **Experience** — Timeline-based work history with alternating layout
- **Projects** — Filterable project carousel with flip card details
- **Education** — Academic background with CGPA display
- **Certifications** — Professional certifications and achievements
- **Contact** — Contact form with email integration



## Tech Stack


| Category      | Technologies                          |
| ------------- | ------------------------------------- |
| Framework     | Next.js 15, React 19                  |
| Language      | TypeScript                            |
| Styling       | Tailwind CSS 3, CSS Custom Properties |
| Animations    | Framer Motion, GSAP, Lenis            |
| UI Components | Swiper.js, Lucide React Icons         |
| Deployment    | Docker, GitHub Actions                |




## Getting Started



### Prerequisites

- Node.js 20.x or higher
- npm or yarn



### Installation

1. **Clone the repository**
  ```bash
   git clone https://github.com/MalikSaddique/Portfolio_.git
   cd Portfolio_
  ```
2. **Install dependencies**
  ```bash
   npm install
  ```
3. **Set up environment variables**
  ```bash
   cp .env.example .env
  ```
   Update the `.env` file with your configuration.
4. **Run the development server**
  ```bash
   npm run dev
  ```
5. **Open in browser**
  Navigate to [http://localhost:3000](http://localhost:3000)



## Available Scripts


| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |




## Docker Deployment



### Build and run with Docker

```bash
# Build the image
docker build -t portfolio:latest .

# Run the container
docker run -p 3000:3000 portfolio:latest
```



### Using Docker Compose

```bash
docker-compose up -d
```



## Project Structure

```
├── public/                 # Static assets
│   └── Profile-picture/    # Profile images
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── api/           # API routes
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── components/        # React components
│   │   ├── sections/      # Page sections
│   │   └── ui/            # Reusable UI components
│   ├── context/           # React context providers
│   ├── data/              # Portfolio data
│   └── lib/               # Utility functions
├── .github/workflows/     # CI/CD pipelines
├── Dockerfile             # Docker configuration
├── docker-compose.yml     # Docker Compose config
├── tailwind.config.ts     # Tailwind configuration
└── tsconfig.json          # TypeScript configuration
```



## Customization



### Update Personal Information

Edit `src/data/portfolio.ts` to update:

- Personal details (name, email, social links)
- Skills and proficiency levels
- Work experience
- Projects
- Education
- Certifications



### Modify Theme Colors

Update CSS variables in `src/app/globals.css`:

```css
:root {
  --background: #0b0f19;
  --foreground: #e5e7eb;
  --accent-blue: #3b82f6;
  --accent-cyan: #22d3ee;
  --accent-violet: #8b5cf6;
}
```



## Deployment Options

- **Vercel** — Recommended for Next.js (zero-config deployment)
- **Docker/Kubernetes** — Use provided Dockerfile and manifests
- **AWS/GCP/Azure** — Deploy containers or serverless
- **Self-hosted** — Use `npm run build && npm run start`



## Contact

**Muhammad Siddique**

- Email: [maliksaddique139@gmail.com](mailto:maliksaddique139@gmail.com)
- LinkedIn: [Muhammad Siddique](https://www.linkedin.com/in/muhammad-siddique-119860228)
- GitHub: [@MalikSaddique](https://github.com/MalikSaddique)

---

