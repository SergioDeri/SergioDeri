# Design and Build My Personal Developer Portfolio

Design and build my personal portfolio as a developer: a single-page website, dark mode, modern developer/hacker aesthetic, full of personality, and without looking like a corporate template.

## Tech Stack
Astro + Tailwind CSS + TypeScript. Static website, responsive (mobile-first), with minimal JavaScript.

## Visual Direction
- Almost-black background (#050505) with a subtle grid of 1px lines every 120px (white at 2–5% opacity), fixed across the entire page.
- A purple glow (approximately #4C2A85) in the hero section, fading down from the header and blending into the black background.
- Single accent color: neon lime #E0FF8A, used for the main subtitle, links, active navigation indicator, and primary button.
- Primary text #F3F4F6, secondary text #9CA3AF, surfaces and inputs #18181B with a 1px gray border.
- Typography: Onest Variable for headings and body text; Roboto Mono Variable for dates, technical data, and details.
- Strong hierarchy: 72px H1 on desktop, bold with tight line-height; 48px section headings; 20px body text.
- Border radius: 8px for cards and images, fully rounded pills.

## Layout Structure

### 1. Sticky Header
- Semi-transparent black gradient background.
- Avatar + "[your-domain]" on the left.
- Centered navigation (Home, Blog) with a thick lime underline on the active item.
- GitHub and LinkedIn icons on the right.

### 2. Hero Section
- Square avatar next to "Hi, I'm Sergio" in an oversized font.
- Below it, in lime: "Backend & Full Stack Developer".
- Then a short introduction:

"5+ years building software and solving complex VoIP and contact center problems from Montevideo, Uruguay."

### 3. Experience
Vertical timeline with a thin line and white dots. Each item includes a monospace date ("Aug 2026 → present"), company name as a colored pill, job title as a heading, and a brief description.

- **Virtualtech:** Customer Support Engineer, Tier 2 VoIP/Contact Center (Aug 2026 → present)
- **Net2Phone:** Tier 2 Support Engineer Lead and Backend Developer ([dates])
- **Nortal:** Development Support & QA Engineer ([dates])
- **Freelance:** Technical support for contact center platforms ([dates])

### 4. Skills
Grouped by category in rows of pills, each with its technology logo and brand-specific color.

- **Backend:** Java, Node.js, Python
- **Frontend:** React, [others]
- **VoIP / Contact Center:** Asterisk, uContact
- **Databases / Infrastructure:** [complete]

### 5. Projects
Featured projects displayed in horizontal cards (screenshot with a border on the left; title, description, and a lime "More info" link on the right; stack pills underneath).

Secondary projects displayed in a more compact two-column grid.

Include:

- **tostad.app:** SaaS platform for weekly food ordering at cafés.
- **clientelia:** Complete platform to follow project, manage tickets and client data
- **Oshinagaki:** Online menu for restaurats
- **ElegilosVos:** Football fans vote for their team.

### 6. Contact
Full-width contact form (Subject, Message) with dark inputs and a full-width lime button with dark text.

### 7. Footer
Centered, with copyright information and social media icons.

## Interactions
- Letter-by-letter entrance animation for my name.
- Subtle fade-in animations for sections as the user scrolls.
- Card hover effects: slight elevation and lime border.
- Pill hover effects: minimal scaling.
- Respect `prefers-reduced-motion`.

## Personal Identity
I define myself as a "craftsman programmer": I enjoy building things from scratch and understanding every component.

Reflect this identity through small technical details, such as terminal-style monospace labels or a subtle nod to telephony/SIP in some microcopy. Keep these details understated and avoid visual clutter.

## Quality Requirements
- Semantic HTML.
- WCAG AA color contrast.
- Visible keyboard focus states.
- Optimized images.
- SEO metadata and Open Graph tags.
- Content stored in separate data files (experience, skills, projects) for easy editing.

Use this direction as inspiration and create an original design without copying any existing website.