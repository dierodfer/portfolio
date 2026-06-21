import en from "./en.json";
import es from "./es.json";

export type Lang = "en" | "es";

export const languages: Lang[] = ["en", "es"];
export const defaultLang: Lang = "en";

const dictionaries = { en, es } as const;

/**
 * Retrieve a nested translation by dot-notation key, e.g. t("hero.greeting", "es").
 * Falls back to the default language and finally to the key itself.
 */
export function t(key: string, lang: Lang = defaultLang): string {
  const lookup = (dict: Record<string, unknown>): string | undefined => {
    return key.split(".").reduce<unknown>((acc, part) => {
      if (acc && typeof acc === "object" && part in acc) {
        return (acc as Record<string, unknown>)[part];
      }
      return undefined;
    }, dict) as string | undefined;
  };

  return lookup(dictionaries[lang]) ?? lookup(dictionaries[defaultLang]) ?? key;
}

/** Build a base-aware URL for a given language. EN lives at root, ES under /es/. */
export function langPath(lang: Lang, base: string): string {
  const clean = base.endsWith("/") ? base.slice(0, -1) : base;
  return lang === defaultLang ? `${clean}/` : `${clean}/${lang}/`;
}
