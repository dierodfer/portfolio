import type { NavKey } from "../i18n/i18n";

export interface NavItem {
  key: NavKey; // i18n key under "nav"
  href: string; // section anchor
}

export const navItems: NavItem[] = [
  { key: "home", href: "#top" },
  { key: "experience", href: "#experiencia" },
  { key: "technologies", href: "#tecnologias" },
  { key: "projects", href: "#proyectos" },
];
