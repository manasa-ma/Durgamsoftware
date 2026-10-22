# Durgam Soft — Design System & Visual Identity

The design system for **Durgam Soft Pvt. Ltd.** provides a modern, premium, software-focused, and trustworthy visual identity.

---

## 1. Color Palette

The visual system is anchored on **Navy + Orange + White**, with pure white as the primary page background.

| Token | Hex Value | Semantic Role | Tailwind Class |
| :--- | :--- | :--- | :--- |
| **Primary Navy** | `#0B1F3A` | Brand Core, Headings, Major CTA Section | `text-brand-navy`, `bg-brand-navy` |
| **Dark Navy** | `#071525` | Footer, High-Contrast Overlays | `bg-brand-dark-navy` |
| **Primary Orange** | `#F97316` | Accent, Primary CTAs, Key Badges | `bg-brand-orange`, `text-brand-orange` |
| **Orange Hover** | `#EA580C` | Button Hover State | `hover:bg-brand-orange-hover` |
| **Light Orange** | `#FFF7ED` | Icon Backgrounds, Soft Badges | `bg-brand-light-orange` |
| **White** | `#FFFFFF` | Primary Page Background, Card Surfaces | `bg-white` |
| **Light Gray** | `#F8FAFC` | Alternating Section Backgrounds | `bg-brand-light-gray` |
| **Border Color** | `#E2E8F0` | Subtle Card Borders & Dividers | `border-brand-border` |
| **Primary Text** | `#0F172A` | Body Copy, High Legibility Text | `text-brand-primary-text` |
| **Secondary Text**| `#475569` | Descriptions, Metadata, Subtitles | `text-brand-secondary-text` |

---

## 2. Design Rules & Hierarchy

- **Page Background**: White (`#FFFFFF`).
- **Primary Text**: Navy / Slate-900 (`#0F172A`).
- **Primary CTA**: Orange (`#F97316`) with white text and `#EA580C` hover state.
- **Secondary CTA**: White background with Navy border (`#0B1F3A`) and Navy text.
- **Card Surfaces**: Pure white with subtle 1px border (`#E2E8F0`) and light hover lift.
- **Alternating Sections**: Very light gray (`#F8FAFC`) to distinguish visual rhythm.
- **Major CTA Section**: Deep Navy (`#0B1F3A`) with contrasting white text and Orange CTA.
- **Footer**: Dark Navy (`#071525`) for strong structural anchoring.

---

## 3. Typography

- **Font Family**: Inter, system-ui, -apple-system, sans-serif.
- **Letter Spacing**:
  - Headings (`h1` - `h4`): `-0.02em` for tight, premium display typography.
  - Badges / Microcopy: `+0.05em` uppercase for clean structure.

---

## 4. UI Components

### Buttons
- `<Button variant="primary">`: Orange background, white text, subtle shadow.
- `<Button variant="secondary">`: White background, Navy border, Navy text.
- `<Button variant="navy">`: Navy background, white text.

### Badges
- `<Badge variant="orange">`: Soft light orange background with orange text.
- `<Badge variant="navy">`: Subtle slate background with navy text.
- `<Badge variant="gray">`: Light gray border with slate text.

### Visual Placeholders
- `<PlaceholderBox>`: Reusable dashed container displaying tokenized visual asset specifications.
