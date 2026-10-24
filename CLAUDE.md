# CLAUDE.md — Durgam Soft Website Guidelines

This project contains the frontend multi-page application for **Durgam Soft Pvt. Ltd.** website.

---

## Commands

```bash
# Development server (http://localhost:5173)
npm run dev

# Production build (Vite bundle)
npm run build

# Code linting
npm run lint

# Preview production build
npm run preview
```

---

## Architectural Rules

1. **Multi-Page Routing**:
   The website is a **proper multi-page application** powered by **React Router v7**.
   - No anchor scrolling (`#products`, `#services`, etc.) for main navigation.
   - All navigation items map to dedicated routes (`/`, `/products`, `/services`, `/industries`, `/about`, `/resources`, `/careers`, `/contact`, `/book-demo`).
   - Inner pages use `<Breadcrumb />` (`src/components/common/Breadcrumb.jsx`).
   - Active routes receive visible highlight styling via `<NavLink>`.

2. **Concise Homepage**:
   The homepage (`/`) only hosts a preview of each pillar with an outbound exploration CTA:
   - Products: `[Explore All Products →]` (`/products`)
   - Services: `[Explore All Services →]` (`/services`)
   - Industries: `[Explore All Industries →]` (`/industries`)
   - About Us: `[Learn More About Us →]` (`/about`)
   - Resources: `[Read Our Blog →]` (`/resources/blog`)
   - Careers: `[View All Careers →]` (`/careers`)

3. **Design System**:
   - Primary Navy: `#0B1F3A`
   - Dark Navy: `#071525`
   - Primary Orange: `#F97316`
   - Orange Hover: `#EA580C`
   - Light Orange: `#FFF7ED`
   - White: `#FFFFFF`
   - Light Gray: `#F8FAFC`
   - Border: `#E2E8F0`
   - Primary Text: `#0F172A`
   - Secondary Text: `#475569`

4. **Content Rules**:
   - Never invent testimonials, statistics, client numbers, years of experience, or pricing.
   - Use tokenized placeholders (`[HERO_HEADLINE]`, `[FOUNDER_NAME]`, `[PRODUCT_DESCRIPTION]`, etc.) until approved copy is supplied.
