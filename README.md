# Vaishali Sirimalla — Personal Portfolio Website

A premium, production-ready personal engineering portfolio for **Vaishali Sirimalla**, Software Engineer at Zeus Learning.

Built with **React.js, TypeScript, Vite, Tailwind CSS, Framer Motion, and Lucide React**.

---

## ⚡ Quick Start

### 1. Development Mode
```bash
npm run dev
```
Open your browser to `http://localhost:5173`.

### 2. Production Build
```bash
npm run build
```
Generates an optimized, tree-shaken static bundle in the `dist/` directory.

### 3. Local Production Preview
```bash
npm run preview
```

---

## 📂 Project Architecture

```
├── public/
│   ├── avatar.svg                  # Editorial portrait placeholder
│   ├── favicon.svg                 # Custom monogram SVG favicon
│   ├── robots.txt                  # Search engine crawler rules
│   ├── sitemap.xml                 # XML sitemap
│   └── Vaishali_Sirimalla_SDE.pdf  # Direct downloadable resume PDF
├── src/
│   ├── components/
│   │   ├── Navbar/                 # Sticky blur navigation & scroll-spy
│   │   ├── Hero/                   # Editorial headline, status pill & portrait frame
│   │   ├── About/                  # Authentic journey, engineering pillars & values
│   │   ├── Experience/             # Zeus Learning timeline & technical ownership
│   │   ├── Projects/               # Featured & secondary projects + case study modal
│   │   ├── OpenSource/             # Oppia contributions & accessibility fix spotlight
│   │   ├── Skills/                 # Categorized technical competencies
│   │   ├── Community/              # Speaking, Codexa leadership, heyCoders & meetups
│   │   ├── Education/              # K. J. Somaiya Institute of Technology (CGPA 9.5)
│   │   ├── Contact/                # Functional copy-to-clipboard, mailto & social grid
│   │   ├── Footer/                 # Colophon, copyright & back-to-top
│   │   └── UI/                     # Reusable Button, Badge, Modal, Container
│   ├── data/                       # Centralized TypeScript data files
│   │   ├── profile.ts              # Personal info, headline, photo URL & resume path
│   │   ├── experience.ts           # Zeus Learning contributions & tech stack
│   │   ├── projects.ts             # 5 detailed projects (3 featured + 2 secondary)
│   │   ├── openSource.ts           # Oppia a11y contribution details
│   │   ├── skills.ts               # Categorized skill taxonomy
│   │   ├── community.ts            # Talks, events, mentoring & content
│   │   ├── education.ts            # Somaiya degree & academic achievements
│   │   └── socials.ts              # Verified links (GitHub, LinkedIn, LeetCode, etc.)
│   ├── hooks/                      # Custom hooks (useScrollSpy, useReducedMotion)
│   ├── styles/                     # Tailwind CSS v4 & custom scrollbar styles
│   ├── types/                      # TypeScript data interfaces
│   ├── App.tsx                     # Main layout assembly
│   └── main.tsx                    # React DOM root entry
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
└── vercel.json                     # Ready for 1-click Vercel deployment
```

---

## 🎨 How to Customize

- **Updating Profile & Photo:** Open `src/data/profile.ts`. To change your photo, place your image in `public/` (e.g. `public/vaishali.jpg`) and set `photoUrl: '/vaishali.jpg'`.
- **Updating Resume:** Place your new PDF in `public/` and update `resumeUrl` in `src/data/profile.ts`.
- **Adding / Reordering Projects:** Edit `src/data/projects.ts`. Set `isFeatured: true` to spotlight any project in the top grid.
- **Updating Social Links:** Edit `src/data/socials.ts`.

---

## 🚀 Deployment to Vercel

1. Push this repository to your GitHub account:
   ```bash
   git add .
   git commit -m "feat: premium portfolio for Vaishali Sirimalla"
   git branch -M main
   git remote add origin https://github.com/Vaishali021103/portfolio.git
   git push -u origin main
   ```
2. Import the repository in [Vercel](https://vercel.com).
3. The build settings are pre-configured:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**!
