import type { Period } from "../lib/period";

export interface Role extends Period {
  company: string;
  /** Colour of the company pill. */
  color: "cyan" | "magenta" | "violet" | "white";
  title: string;
  description: string;
}

export const experience: Role[] = [
  {
    company: "Virtualtech",
    color: "cyan",
    title: "Customer Support Engineer",
    start: "2026-08",
    description:
      "Tier 2 support for VoIP and contact center systems built on Asterisk and uContact, covering telephony, dialplans and MySQL, and the point of contact for escalations with Development and QA.",
  },
  {
    company: "Nortal",
    color: "violet",
    title: "Development Support & QA Engineer",
    start: "2025-09",
    end: "2026-06",
    description:
      "Investigated and resolved production issues across environments with root-cause analysis, and contributed backend features and fixes within low-code ecosystems.",
  },
  {
    company: "Net2Phone",
    color: "magenta",
    title: "Backend & Full-Stack Developer",
    start: "2022-06",
    end: "2025-07",
    description:
      "Built backend services and customer-facing features for uContact, serving 5,000+ active users. Architected the Gmail OAuth 2.0 integration adopted by 100+ client organizations, and reviewed 50+ pull requests a month in a team of 16.",
  },
  {
    company: "Net2Phone",
    color: "magenta",
    title: "Tier 2 Support Engineer Lead",
    start: "2020-07",
    end: "2022-06",
    description:
      "Led a team of 5 engineers across incident management and SLA compliance, automated operations with SQL, Shell and JavaScript, and designed onboarding and technical training.",
  },
  {
    company: "Isbel",
    color: "white",
    title: "Modem Technician",
    start: "2019-07",
    end: "2020-06",
    description: "Diagnosed, repaired and refurbished networking equipment, keeping service running and hardware in use.",
  },
];
