export interface NavItem {
  key: string; // i18n key under "nav"
  href: string; // section anchor
}

export const navItems: NavItem[] = [
  { key: "experience", href: "#experiencia" },
  { key: "technologies", href: "#tecnologias" },
  { key: "projects", href: "#proyectos" },
  { key: "contact", href: "#contacto" },
];
