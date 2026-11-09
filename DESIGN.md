---
name: Sergio Deri
description: One craftsman's call log, seen from a night-shift terminal on a Tokyo side street.
colors:
  cyan: "#5febff"
  cyan-bright: "#a5f4ff"
  magenta: "#ff6bb5"
  violet: "#4c2a85"
  violet-light: "#b79cf0"
  void: "#050505"
  crt-glass: "#0a0a10"
  surface: "#18181b"
  line: "#3f3f46"
  line-strong: "#71717a"
  muted: "#9ca3af"
  ink: "#f3f4f6"
typography:
  display:
    fontFamily: '"Onest Variable", ui-sans-serif, system-ui, sans-serif'
    fontSize: "4.5rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
  display-compact:
    fontFamily: '"Onest Variable", ui-sans-serif, system-ui, sans-serif'
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: '"Onest Variable", ui-sans-serif, system-ui, sans-serif'
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  headline-compact:
    fontFamily: '"Onest Variable", ui-sans-serif, system-ui, sans-serif'
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  role:
    fontFamily: '"Onest Variable", ui-sans-serif, system-ui, sans-serif'
    fontSize: "2.25rem"
    fontWeight: 600
    lineHeight: 1.25
  role-compact:
    fontFamily: '"Onest Variable", ui-sans-serif, system-ui, sans-serif'
    fontSize: "1.75rem"
    fontWeight: 600
    lineHeight: 1.25
  title:
    fontFamily: '"Onest Variable", ui-sans-serif, system-ui, sans-serif'
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.375
  body:
    fontFamily: '"Onest Variable", ui-sans-serif, system-ui, sans-serif'
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.6
  body-compact:
    fontFamily: '"Onest Variable", ui-sans-serif, system-ui, sans-serif'
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  ui:
    fontFamily: '"Onest Variable", ui-sans-serif, system-ui, sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  ui-strong:
    fontFamily: '"Onest Variable", ui-sans-serif, system-ui, sans-serif'
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.43
  label:
    fontFamily: '"Roboto Mono Variable", ui-monospace, Menlo, monospace'
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.43
  micro:
    fontFamily: '"Roboto Mono Variable", ui-monospace, Menlo, monospace'
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.33
rounded:
  sm: "2px"
  md: "8px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  section-compact: "64px"
  section: "96px"
  label-column: "208px"
  grid: "120px"
  container: "1152px"
components:
  button-contact:
    backgroundColor: "{colors.cyan}"
    textColor: "{colors.void}"
    typography: "{typography.ui-strong}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
  button-contact-hover:
    backgroundColor: "{colors.cyan-bright}"
    textColor: "{colors.void}"
  button-submit:
    backgroundColor: "{colors.cyan}"
    textColor: "{colors.void}"
    rounded: "{rounded.md}"
    padding: "14px 24px"
    width: "100%"
  button-submit-hover:
    backgroundColor: "{colors.cyan-bright}"
    textColor: "{colors.void}"
  field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
    width: "100%"
  nav-link:
    textColor: "{colors.muted}"
    typography: "{typography.ui}"
    padding: "4px 0"
  nav-link-hover:
    textColor: "{colors.magenta}"
  nav-link-current:
    textColor: "{colors.ink}"
  link-more:
    textColor: "{colors.cyan}"
    padding: "4px 0"
  link-more-hover:
    textColor: "{colors.magenta}"
  card-project:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "36px 32px 32px"
  card-project-compact:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "28px 20px 20px"
  screen-crt:
    backgroundColor: "{colors.crt-glass}"
    textColor: "{colors.muted}"
    typography: "{typography.micro}"
    rounded: "{rounded.md}"
    padding: "16px"
  chip-tech:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "2px 12px"
  chip-skill:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.full}"
    padding: "6px 16px 6px 12px"
  chip-company:
    textColor: "{colors.cyan}"
    rounded: "{rounded.full}"
    padding: "2px 12px"
---

# Design System: Sergio Deri

## Overview

**Creative North Star: "The Night-Shift Call Log"**

A terminal left running on a Tokyo side street, kept by one person who built everything on it. The page is a near-black room with a faint 120px grid on the wall and violet light falling from the header. Two neon colours do all the talking: cyan where something can be done, magenta where something is being named or answered. Everything else is ink, grey and hairline.

Density is unhurried. Type is large, sections sit far apart, and the personal projects carry the most mass on the page. Ornament is line-work drawn at low opacity: the asanoha hemp-leaf lattice and the seigaiha wave horizon, the scanlines over images, the single neon sign. Each should register only when you look for it. The world's humour lives in monospaced marginalia that read like telephony and DOS output, set small and grey beside the real content.

The system rejects corporate templates and loud cyberpunk: heavy glitch, flicker, chromatic aberration. It also rejects retro-web costume and Japanese characters used as decoration; the Japanese reference is carried by geometry alone.

**Key Characteristics:**
- Near-black ground with a fixed 120px hairline grid and one violet glow from the top of the page.
- Two neon accents with separate jobs: cyan acts, magenta names and answers hover.
- Onest for everything read; Roboto Mono for everything logged.
- Line-only traditional patterns, faded by mask, never filled with colour.
- Flat at rest; depth appears only as a response to a pointer.
- Motion on arrival and on state change only. Nothing loops.

## Colors

A black room lit by two neon tubes, with violet as the ambient spill and a cold zinc scale for structure.

### Primary
- **Terminal Cyan** (#5febff): The action colour. Filled buttons, the "More info" command link, the current-section underline in the navigation, the focus ring, the text caret, the solid name cursor, the word INVITE, and the seigaiha horizon line-work.
- **Lit Cyan** (#a5f4ff): The hover state of filled cyan buttons, and nothing else.

### Secondary
- **Sign Magenta** (#ff6bb5): The naming and response colour. The role line under the name, the neon sign's frame, the asanoha lattice in project cards, the portrait border, every link and card hover, the invalid field border, and text selection.

### Tertiary
- **Header Violet** (#4c2a85): Ambient only, as the radial glow falling from the header. It is too dark to carry text or lines.
- **Pale Violet** (#b79cf0): A third employer-chip colour in the experience timeline, alongside cyan, magenta and ink.

### Neutral
- **Void** (#050505): The page ground, the notch behind a card's path, and the occluding fill inside the seigaiha scales.
- **CRT Glass** (#0a0a10): The face of placeholder project screens, a shade colder than the page.
- **Zinc Surface** (#18181b): Project cards, form fields and skill chips.
- **Hairline** (#3f3f46): Card borders, the section rule, the timeline spine, internal dividers.
- **Strong Hairline** (#71717a): Borders that must be found: form fields and technology chips.
- **Muted Grey** (#9ca3af): Secondary prose, dates, labels, resting navigation and icons.
- **Ink** (#f3f4f6): Headings and primary prose.

### Named Rules

**The Two Tubes Rule.** Every action is cyan at rest and no action is magenta at rest. Magenta names the person and answers the pointer: a hover on a cyan text link or a neutral link goes to magenta. Both tubes may also light the world's line-work and CRT sketches.

**The Spill Rule.** Violet is light, not paint. It appears as the header's radial glow and never as a fill, a border or a text colour; only its pale tint may colour text, and only on a timeline chip.

**The Brand Marks Rule.** Skill chips may carry a technology's own colour, mixed toward white for the icon (72%) and toward Hairline for the border (45%). No other component borrows outside colour.

## Typography

**Display Font:** Onest Variable (with ui-sans-serif, system-ui)
**Label/Mono Font:** Roboto Mono Variable (with ui-monospace, Menlo)

**Character:** Onest is warm and round enough to sound like a person, set heavy and tight at the top of the page. Roboto Mono is the machine keeping notes in the margin.

### Hierarchy
- **Display** (700, 72px from 1024px wide, 48px below, line-height 1, -0.03em): The name in the hero, once per page.
- **Headline** (700, 48px from 768px wide, 36px below, line-height 1.25, -0.02em): Section titles. Project names use the same size and tracking with line-height tightened to 1.
- **Role** (600, 36px from 768px wide, 28px below, line-height 1.25): The magenta job title under the name.
- **Title** (600, 24px, line-height 1.375): Job titles in the timeline.
- **Body** (400, 20px from 768px wide, 18px below, line-height 1.6): Prose, held to 36rem in the hero and 65ch in the timeline.
- **UI** (400, 16px, line-height 1.5): Navigation, skill chips, footer line. The header button steps to 14px at 600 and company chips to 14px at 500.
- **Label** (400, Roboto Mono, 14px): Dates, form labels, section signals, skill categories, technology chips, status lines. The "More info" command is the same face at 16px.
- **Micro** (400, Roboto Mono, 12px): Card paths and the content of CRT screens.

### Named Rules

**The Logged Voice Rule.** Mono is reserved for what a machine would print: dates, paths, signals, commands, field labels, a project's technology row. Sentences a person says stay in Onest.

**The Sentence Case Rule.** Mono labels keep their source case with no added tracking. Capitals appear only where the machine would print them: INVITE, ACK, BYE, a DOS path, the text of a CRT screen.

## Layout

A single column of sections in a centred container (1152px maximum, 24px gutters on each side), running top to bottom in the order of a SIP call. Sections are separated by 64px of vertical padding on small screens and 96px from 768px wide. Headings sit 48px above their content, 64px from 768px wide.

Records use a two-column ledger from 768px wide: a 208px mono column for the date or category, and the content beside it. Below that, the columns stack. Project cards stack with 48px between them, each split about 6:5 between screen and text from 768px wide. The grid behind everything is fixed to the viewport at 120px.

The neon sign takes a 132px column on the right of the hero from 1024px wide. Below that it disappears and a 64px strip of asanoha closes the hero text instead. The sticky header runs three columns from 768px wide and wraps navigation onto its own row below that, with social icons hidden.

Motion belongs to arrival and state. The name enters letter by letter and ends on a solid block cursor that stays still. Sections rise 14px and fade once as they enter the viewport. Under reduced motion all of it is removed and the content is simply present, including the name and every revealed section.

### Named Rules

**The Call Sequence Rule.** Page order follows the call. INVITE opens the hero, section signals advance through 100 Trying, 180 Ringing, 200 OK and ACK, and BYE closes the footer. A new section takes its place in the sequence with a real SIP message.

## Elevation & Depth

Flat at rest. Depth comes from tonal steps (Void to Zinc Surface) and hairlines. The one elevation event is a project card under a pointer, which rises 3px and gains a soft magenta glow beneath it. The neon sign carries a permanent faint halo because it is a light source, and that halo is the only resting neon glow on the page; the header's violet wash is ambient light.

### Shadow Vocabulary
- **Card lift** (`box-shadow: 0 14px 34px -18px rgb(255 107 181 / 0.42)`): Project card on hover only, paired with a magenta border.
- **Neon halo** (`filter: drop-shadow(0 0 7px rgb(255 107 181 / 0.3))`): The neon sign only.

### Named Rules

**The Almost-Imperceptible Rule.** Atmosphere stays at the opacities the build set: grid at 3.5% white, scanlines at 20% void every 3px, asanoha at 42%, seigaiha at 32%, sign lattice at 66% and fading down its height. If an effect is the first thing you notice, it is too strong.

**The Still Light Rule.** Light never moves. Scanlines, glows, the sign and the cursor are static; they do not animate, pulse or blink.

## Shapes

Gently rounded rectangles (8px) for every container: cards, fields, images, screens, the sign's frame, the form's submit button. Full-round capsules are reserved for small inline things: chips, and the compact Contact button in the header. Timeline nodes are 9px ink circles on a hairline spine.

Traditional patterns are drawn as thin strokes (0.7 to 0.8 units) and fade out by mask: asanoha from the top-right corner of a card, seigaiha downward from nothing into the footer. Cards are broken once along the top edge, where the DOS path sits on a Void notch across the border.

## Components

### Buttons
Compact and bright: the only large filled colour on the page.
- **Shape:** Full capsule in the header; gently rounded (8px) at full width in the form.
- **Primary:** Cyan fill, Void text, semibold.
- **Hover / Focus:** Fill lifts to Lit Cyan over 160ms; 2px cyan outline offset 3px on keyboard focus; presses to 97% scale.
- **Disabled:** 70% opacity with a progress cursor while the form sends.

### Chips
- **Technology:** Capsule, Strong Hairline border, no fill, mono label. Scales to 1.04 under a pointer.
- **Skill:** Capsule on Zinc Surface with a 16px brand glyph in SVG, per the Brand Marks Rule. Same hover.
- **Company:** Capsule with 50% border in its own colour and matching text (cyan, magenta, pale violet) or 40% ink for white. Static.

### Cards / Containers
The project card is the heaviest object on the page, and the only card in the system.
- **Corner Style:** Gently rounded (8px).
- **Background:** Zinc Surface with a Hairline border, turning magenta on hover.
- **Shadow Strategy:** Flat at rest; card lift on hover, per Elevation & Depth.
- **Border:** 1px, with a mono path notched into the top edge at the card's left padding.
- **Internal Padding:** 20px, 28px at the top on small screens; 32px, 36px at the top from 768px wide. Asanoha occupies the top-right corner behind the content; a Hairline divider separates the technology row.

### Inputs / Fields
- **Style:** Zinc Surface, 1px Strong Hairline border, gently rounded (8px), cyan caret. Mono label above in Muted Grey.
- **Focus:** The system 2px cyan outline offset 3px.
- **Error:** Border turns magenta, only after the visitor has interacted (`:user-invalid`).
- **Status:** A mono line below the form reports in SIP responses: 100 Trying, 200 OK, 503 Service Unavailable.

### Navigation
Centred anchors at 16px in Muted Grey, turning magenta on hover. The current section is Ink with a 3px cyan bar that wipes in from the left in 200ms, driven by the section in view. The header is sticky and dissolves downward through a black gradient, leaving no seam across the glow. Icon links are 44px square.

### Section Heading
A headline on the left and a 14px mono SIP signal on the right, sharing a baseline over a Hairline rule. The signal is decorative and hidden from assistive technology.

### Scanlined Frame
Images and screens sit in an 8px frame with a static scanline layer above them. The portrait is a duotone photograph with a 60% magenta border at 200px square (96px on small screens). A project screenshot, when one exists, takes this same frame with a Hairline border.

### CRT Screen
A 16:9 placeholder drawn in code, standing in for a missing screenshot: CRT Glass, a `C:\>` run line in cyan, a line-and-block sketch of the product, and the words "sample screen" in the corner. It is labelled as a sample and it is replaced by a real screenshot when one arrives.

### Neon Sign
A vertical 132px panel in the hero: a cyan asanoha lattice inside a 1.5-unit magenta rounded frame, fading to 34% at its foot, with the neon halo. One per page.

## Do's and Don'ts

### Do:
- **Do** make every action cyan at rest and move hovers to magenta, except filled buttons, which lift to Lit Cyan.
- **Do** give every new section a real SIP signal in its heading, in sequence.
- **Do** set dates, paths and signals in Roboto Mono at 14px or 12px.
- **Do** gate lift and scale behind a real pointer, and remove every transform under reduced motion.
- **Do** keep the name and all revealed content fully visible when animation does not run.
- **Do** use the 2px cyan outline at 3px offset for every keyboard focus state.
- **Do** swap a CRT screen for a real screenshot in the same scanlined frame as soon as one exists.

### Don't:
- **Don't** add heavy glitch, flicker or chromatic aberration; scanlines, glow and the cursor stay static and faint.
- **Don't** use Japanese characters as decoration; asanoha and seigaiha carry the reference as line-work.
- **Don't** extend the DOS path or `C:\>` line into windows, title bars, taskbars, boot screens or other operating-system costume, or into GeoCities-style retro-web pastiche.
- **Don't** fill the asanoha or seigaiha with colour, or raise them above the opacities in the Almost-Imperceptible Rule.
- **Don't** add a second neon sign, or a resting neon glow to any other element.
- **Don't** add looping animation, including a blinking cursor.
- **Don't** give another section the visual weight of the project cards.
- **Don't** show an invented fact on a surface; missing data is hidden.
