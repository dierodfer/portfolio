/**
 * Join Astro's BASE_URL with an asset path, guaranteeing exactly one slash
 * between them regardless of whether BASE_URL has a trailing slash.
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  const left = base.endsWith("/") ? base.slice(0, -1) : base;
  const right = path.startsWith("/") ? path.slice(1) : path;
  return `${left}/${right}`;
}
