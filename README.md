# Durgam Soft Pvt. Ltd. — Website Frontend

Frontend architecture and homepage foundation for the official **Durgam Soft Pvt. Ltd.** website.

Built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS**.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone or navigate to the project directory
cd DurgamSoftWebsite

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🛠️ Available Scripts

- `npm run dev` — Starts local development server with Hot Module Replacement (HMR).
- `npm run build` — Runs TypeScript compile check (`tsc -b`) and produces an optimized production bundle with Vite.
- `npm run preview` — Locally previews the production build output.
- `npm run lint` — Runs static code analysis.

---

## 📁 Key Directories

```text
src/
├── components/          # Reusable UI component modules (cards, buttons, layout, navigation)
├── data/                # Data structures & mock placeholders for all sections
├── layouts/             # MainLayout with Header, ContactCTA, and Footer
├── pages/Home/          # Homepage view & individual section components
├── routes/              # React Router route registry
├── styles/              # Design tokens and Tailwind CSS rules
├── types/               # TypeScript domain interfaces
└── utils/               # Constants, SEO metadata helper, and utilities
```

---

## 🎨 Visual Identity

- **Primary Navy**: `#0B1F3A`
- **Dark Navy**: `#071525`
- **Primary Orange**: `#F97316`
- **Orange Hover**: `#EA580C`
- **Light Orange**: `#FFF7ED`
- **White**: `#FFFFFF`
- **Light Gray**: `#F8FAFC`
- **Border**: `#E2E8F0`

Refer to [docs/DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md) for full design guidelines.

---

## 📄 Documentation

- [docs/PROJECT-STRUCTURE.md](docs/PROJECT-STRUCTURE.md) — Complete component tree & folder organization
- [docs/DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md) — Visual system tokens, buttons, and rules
- [docs/ROUTES.md](docs/ROUTES.md) — Route roadmap and URL hierarchy
- [docs/CONTENT-PLAN.md](docs/CONTENT-PLAN.md) — Content guidelines & placeholder reference inventory
