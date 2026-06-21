export interface NavItem {
  key: string; // i18n key under "nav"
  href: string; // section anchor
}

export const navItems: NavItem[] = [
  { key: "projects", href: "#proyectos" },
  { key: "technologies", href: "#tecnologias" },
  { key: "experience", href: "#experiencia" },
  { key: "contact", href: "#contacto" },
];
