# ArogyMitra — Vite + React Setup Guide

## Prerequisites
- **Node.js** v18 or higher → https://nodejs.org
- **npm** v9+ (comes with Node.js)

## Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm run dev
```

### 3. Open in browser
Visit: **http://localhost:8080**

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server (hot reload) |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

---

## Project Structure

```
arogymitra-js/
├── src/
│   ├── pages/
│   │   ├── Index.jsx       # Home / Landing page
│   │   ├── Workout.jsx     # Workout planner
│   │   ├── Nutrition.jsx   # Nutrition / meal planner
│   │   └── Aromi.jsx       # AI Coach chatbot
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── NavLink.jsx
│   │   └── ui/             # shadcn/ui components
│   ├── hooks/
│   ├── lib/
│   ├── App.jsx
│   └── main.jsx
├── public/
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## Tech Stack
- **React 18** + **Vite 5**
- **Tailwind CSS** + **shadcn/ui**
- **React Router v6** (multi-page routing)
- **Framer Motion** (animations)
- **Recharts** (charts)
- **@tanstack/react-query**

## Notes
- No API keys required — all AI responses use local mock data
- The AROMI coach uses keyword-matching for demo responses
- Google Fonts loaded from CDN (requires internet for fonts to display)
