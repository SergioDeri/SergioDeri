export interface Project {
  name: string;
  /** Last segment of the DOS path on the card. */
  dosName: string;
  description: string;
  /** Provisional CRT artwork, used until `image` is set. */
  screen: "week" | "tickets" | "menu" | "vote";
  /** File name inside src/assets/projects, for a real screenshot. */
  image?: string;
  imageAlt?: string;
  /** Destination of "More info"; the link is hidden while empty. */
  url?: string;
  /** Stack pills; the row is hidden while empty. */
  stack: string[];
  inProduction?: boolean;
}

export const projects: Project[] = [
  {
    name: "tostad.app",
    dosName: "TOSTAD",
    description: "SaaS platform for weekly food ordering at cafés.",
    screen: "week",
    url: "https://tostad.app",
    stack: ["TypeScript", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "MercadoPago"],
    inProduction: true,
  },
  {
    name: "Oshinagaki",
    dosName: "OSHINAGA",
    description: "Online menu for restaurants.",
    screen: "menu",
    stack: ["TypeScript", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Vercel"],
    inProduction: true,
  },
  {
    name: "clientelia",
    dosName: "CLIENTEL",
    description: "Complete platform to follow projects, manage tickets and keep client data in one place.",
    screen: "tickets",
    stack: ["TypeScript", "React", "Node.js", "Express", "MongoDB", "Google OAuth", "Gmail API"],
  },
  {
    name: "ElegilosVos",
    dosName: "ELEGILOS",
    description: "Football fans pick their team's starting eleven before each match and see how the crowd's choice compares with the coach's.",
    url: "https://elegilosvos.vercel.app",
    screen: "vote",
    image: "elegilosvos.png",
    imageAlt: "ElegilosVos login screen: pixel-art logo over a football pitch, with Google and email sign-in.",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "PWA", "Web Push"],
  },
];
