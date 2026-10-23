# Durgam Soft — Multi-Page Routing Architecture

This document tracks all active and implemented routes for the **Durgam Soft Pvt. Ltd.** website powered by **React Router v7**.

---

## 1. Core Navigation Routes

| Navigation Item | Route                         | Component File                            | Description                                                                                    |
| :-------------- | :---------------------------- | :---------------------------------------- | :--------------------------------------------------------------------------------------------- |
| **Home**        | `/`                           | `src/pages/Home/HomePage.tsx`             | Concise preview of all key areas with dedicated exploration CTAs                               |
| **Products**    | `/products`                   | `src/pages/Products/ProductsPage.tsx`     | Dedicated products landing page introducing billmaster & hardware                              |
| **Services**    | `/services`                   | `src/pages/Services/ServicesPage.tsx`     | Dedicated services landing page (Application Development & Digital Marketing)                  |
| **Industries**  | `/industries`                 | `src/pages/Industries/IndustriesPage.tsx` | Dedicated industries landing page showcasing sectors served                                    |
| **About Us**    | `/about-us` (alias: `/about`) | `src/pages/About/AboutPage.tsx`           | Dedicated company overview, journey, mission, values, founder, and customer relationships      |
| **Resources**   | `/resources`                  | `src/pages/Resources/ResourcesPage.tsx`   | Dedicated resource center linking to company blog and knowledge assets                         |
| **Careers**     | `/careers`                    | `src/pages/Careers/CareersPage.tsx`       | Dedicated careers page with culture values and open positions preview                          |
| **Contact Us**  | `/contact`                    | `src/pages/Contact/ContactPage.tsx`       | Dedicated contact page with corporate address, communication channels, and direct inquiry form |
| **Book a Demo** | `/book-demo`                  | `src/pages/BookDemo/BookDemoPage.tsx`     | Dedicated demo booking page with multi-field qualification form                                |

---

## 2. Product Detail Sub-Routes

| Route                  | Component File                                     | Description                                                                              |
| :--------------------- | :------------------------------------------------- | :--------------------------------------------------------------------------------------- |
| `/products/billmaster` | `src/pages/Products/Billmaster/BillmasterPage.tsx` | Flagship billing software & mobile POS system details                                    |
| `/products/hardware`   | `src/pages/Products/Hardware/HardwarePage.tsx`     | Certified POS hardware catalog (thermal printers, scanners, label printers, consumables) |

---

## 3. Service Detail Sub-Routes

| Route                           | Component File                                                     | Description                                                |
| :------------------------------ | :----------------------------------------------------------------- | :--------------------------------------------------------- |
| `/services/web-development`     | `src/pages/Services/WebDevelopment/WebDevelopmentPage.tsx`         | Cloud, SaaS, and enterprise web application engineering    |
| `/services/mobile-development`  | `src/pages/Services/MobileDevelopment/MobileDevelopmentPage.tsx`   | Native iOS, Android, and cross-platform mobile development |
| `/services/desktop-development` | `src/pages/Services/DesktopDevelopment/DesktopDevelopmentPage.tsx` | Native POS and high-performance desktop applications       |
| `/services/digital-marketing`   | `src/pages/Services/DigitalMarketing/DigitalMarketingPage.tsx`     | SEO, growth acquisition, and search ranking strategies     |

---

## 4. Leadership & Editorial Sub-Routes

| Route                                         | Component File                              | Description                                               |
| :-------------------------------------------- | :------------------------------------------ | :-------------------------------------------------------- |
| `/about-us/founder` (alias: `/about/founder`) | `src/pages/About/FounderPage.tsx`           | Executive biography, leadership history, and vision quote |
| `/resources/blog`                             | `src/pages/Resources/Blog/BlogPage.tsx`     | Editorial archive with category filtering                 |
| `/resources/blog/:slug`                       | `src/pages/Resources/Blog/BlogPostPage.tsx` | Dynamic article reader with breadcrumb and layout         |

---

## 5. Architectural Rules

- **Zero Anchor Links**: Main navigation never uses `#anchor` scrolling.
- **Client-Side Routing**: All internal transitions use React Router's `<Link>` and `<NavLink>`.
- **Breadcrumb Navigation**: Inner pages display breadcrumb paths using `src/components/common/Breadcrumb.tsx`.
- **Active Navigation Indicator**: Nav items highlight actively when the current URL matches the item or its sub-routes.
- **Scroll Restoration**: Navigating between routes automatically scrolls the window to the top.
