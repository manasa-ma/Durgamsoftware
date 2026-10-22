# Durgam Soft Website — Project Structure & Component Architecture

This document outlines the multi-page frontend project architecture for **Durgam Soft Pvt. Ltd.** website, built using **React 19, TypeScript, Vite, React Router v7, and Tailwind CSS**.

---

## 1. Directory Structure

```text
durgamsoft-website/
│
├── public/
│   ├── documents/             # PDFs, whitepapers, brochures
│   ├── icons/                 # Static SVG icons and favicon
│   ├── images/                # Static image assets
│   └── logos/                 # Official brand marks
│
├── src/
│   ├── assets/                # Bundled assets (processed by Vite)
│   │   ├── fonts/
│   │   ├── icons/
│   │   ├── images/
│   │   └── logos/
│   │
│   ├── components/            # Reusable UI component library
│   │   ├── about/             # Company overview & founder cards (CompanyIntro, FounderPreview)
│   │   ├── buttons/           # Button component family (Primary, Secondary, Navy)
│   │   ├── common/            # Shared primitives (Breadcrumb, SectionHeader, Badge, PlaceholderBox)
│   │   ├── industries/        # Industry domain cards (IndustryCard)
│   │   ├── layout/            # Layout shell elements (ContactCTA, Footer, Header)
│   │   ├── navigation/        # Header navigation (Header, Navbar, NavDropdown, MobileMenu)
│   │   ├── products/          # Product domain cards (ProductCard, BillmasterCard, HardwareCard)
│   │   ├── resources/         # Blog & Editorial domain (BlogCard, BlogGrid)
│   │   └── services/          # Service domain cards (DevelopmentCard, MarketingCard, ServiceCard)
│   │
│   ├── data/                  # Typed static datasets & placeholder models
│   │   ├── about.ts           # Company overview & executive founder data
│   │   ├── industries.ts      # Industry verticals data
│   │   ├── navigation.ts      # Multi-page menu structure & sub-routes
│   │   ├── products.ts        # billmaster software & hardware peripherals data
│   │   ├── resources.ts       # Blog post schema records
│   │   └── services.ts        # Engineering & digital marketing offerings
│   │
│   ├── layouts/
│   │   └── MainLayout.tsx     # Master route wrapper (Header + <Outlet /> + Footer + Scroll-to-top)
│   │
│   ├── pages/                 # Multi-page feature routes
│   │   ├── Home/
│   │   │   ├── HomePage.tsx   # Concise homepage preview of all pillars
│   │   │   ├── components/    # Homepage preview sections (Hero, CompanyOverview, Previews)
│   │   │   └── data.ts        # Hero & careers preview data
│   │   │
│   │   ├── Products/
│   │   │   ├── ProductsPage.tsx
│   │   │   ├── Billmaster/
│   │   │   │   └── BillmasterPage.tsx
│   │   │   └── Hardware/
│   │   │       └── HardwarePage.tsx
│   │   │
│   │   ├── Services/
│   │   │   ├── ServicesPage.tsx
│   │   │   ├── WebDevelopment/
│   │   │   │   └── WebDevelopmentPage.tsx
│   │   │   ├── MobileDevelopment/
│   │   │   │   └── MobileDevelopmentPage.tsx
│   │   │   ├── DesktopDevelopment/
│   │   │   │   └── DesktopDevelopmentPage.tsx
│   │   │   └── DigitalMarketing/
│   │   │       └── DigitalMarketingPage.tsx
│   │   │
│   │   ├── Industries/
│   │   │   └── IndustriesPage.tsx
│   │   │
│   │   ├── About/
│   │   │   ├── AboutPage.tsx
│   │   │   └── FounderPage.tsx
│   │   │
│   │   ├── Resources/
│   │   │   ├── ResourcesPage.tsx
│   │   │   └── Blog/
│   │   │       ├── BlogPage.tsx
│   │   │       └── BlogPostPage.tsx
│   │   │
│   │   ├── Careers/
│   │   │   └── CareersPage.tsx
│   │   │
│   │   ├── Contact/
│   │   │   └── ContactPage.tsx
│   │   │
│   │   └── BookDemo/
│   │       └── BookDemoPage.tsx
│   │
│   ├── routes/
│   │   └── index.tsx          # React Router v7 createBrowserRouter registry
│   │
│   ├── styles/
│   │   ├── globals.css        # Tailwind directives & typography layers
│   │   └── variables.css      # Design token CSS variables
│   │
│   ├── types/                 # TypeScript interfaces
│   │   ├── blog.ts
│   │   ├── industry.ts
│   │   ├── navigation.ts
│   │   ├── product.ts
│   │   └── service.ts
│   │
│   ├── utils/
│   │   ├── constants.ts       # Global brand constants & placeholder tokens
│   │   ├── helpers.ts         # Utility helpers (cn, scrolling)
│   │   └── seo.ts             # Dynamic document title & meta description updater
│   │
│   ├── App.tsx                # RouterProvider mounting
│   └── main.tsx               # DOM root mounting
│
├── docs/                      # Technical documentation
│   ├── CONTENT-PLAN.md
│   ├── DESIGN-SYSTEM.md
│   ├── PROJECT-STRUCTURE.md
│   └── ROUTES.md
│
├── CLAUDE.md
├── README.md
├── package.json
└── vite.config.ts
```

---

## 2. Multi-Page Architecture Rules

1. **Concise Homepage**: The homepage (`/`) provides high-level preview sections with explicit forward links to each dedicated page (`[Explore All Products →]`, `[Explore All Services →]`, `[Explore All Industries →]`, `[Learn More About Us →]`, `[Read Our Blog →]`, `[View All Careers →]`).
2. **Dedicated Pages**: Every primary business domain lives on its own URL (`/products`, `/services`, `/industries`, `/about`, `/resources`, `/careers`, `/contact`, `/book-demo`).
3. **Sub-Route Extensibility**: Child pages (`/products/billmaster`, `/products/hardware`, `/services/web-development`, `/about/founder`, `/resources/blog/:slug`) allow deep linking with breadcrumb tracking.
4. **Unified Shell**: `MainLayout.tsx` wraps all routes with shared `Header`, dynamic `<Outlet />`, `Footer`, and automated scroll-to-top navigation.
