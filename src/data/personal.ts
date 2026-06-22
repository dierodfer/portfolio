export type Localized = { en: string; es: string };

export interface PersonalInfo {
  name: string;
  role: Localized;
  tagline: Localized;
  location: Localized;
  email: string;
  github: string;
  linkedin: string;
}

export const personal: PersonalInfo = {
  name: "Diego Rodríguez Fernández",
  role: {
    en: "Software Engineer",
    es: "Software Engineer",
  },
  tagline: {
    en: "Building and delivering solutions in cloud environments with a focus on microservices. Extensive experience in Java and Go within AWS ecosystems.",
    es: "Construyo y despliego soluciones en entornos cloud con foco en microservicios. Amplia experiencia en Java y Go dentro de ecosistemas AWS.",
  },
  location: {
    en: "Madrid, Spain",
    es: "Madrid, España",
  },
  email: "dierodfer6@gmail.com",
  github: "https://github.com/dierodfer",
  linkedin: "https://www.linkedin.com/in/diegorodfer",
};
