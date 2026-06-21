import en from "./en.json";
import es from "./es.json";

export type Lang = "en" | "es";

export const languages: Lang[] = ["en", "es"];
export const defaultLang: Lang = "en";

const dictionaries = { en, es } as const;

type FlatKeys<T, Prefix extends string = ""> =
  T extends Record<string, unknown>
    ? {
        [K in keyof T & string]: FlatKeys<
          T[K],
          Prefix extends "" ? K : `${Prefix}.${K}`
        >;
      }[keyof T & string]
    : Prefix;

export type TranslationKey = FlatKeys<typeof en>;

/** Keys available under the "nav" namespace, for type-safe navigation data. */
export type NavKey = keyof typeof en.nav;

if (import.meta.env.DEV) {
  const flatKeys = (obj: Record<string, unknown>, prefix = ""): string[] =>
    Object.entries(obj).flatMap(([k, v]) => {
      const key = prefix ? `${prefix}.${k}` : k;
      return typeof v === "object" && v
        ? flatKeys(v as Record<string, unknown>, key)
        : [key];
    });
  const enKeys = flatKeys(en).sort().join(",");
  const esKeys = flatKeys(es).sort().join(",");
  if (enKeys !== esKeys) {
    const enSet = new Set(flatKeys(en));
    const esSet = new Set(flatKeys(es));
    const missingInEs = flatKeys(en).filter((k) => !esSet.has(k));
    const missingInEn = flatKeys(es).filter((k) => !enSet.has(k));
    console.warn(
      `[i18n] Key mismatch between en.json and es.json:`,
      missingInEs.length ? `\n  Missing in es: ${missingInEs.join(", ")}` : "",
      missingInEn.length ? `\n  Missing in en: ${missingInEn.join(", ")}` : "",
    );
  }
}

export function t(key: TranslationKey, lang: Lang = defaultLang): string {
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

export function langPath(lang: Lang, base: string): string {
  const clean = base.endsWith("/") ? base.slice(0, -1) : base;
  return lang === defaultLang ? `${clean}/` : `${clean}/${lang}/`;
}
