import { technologies, techById } from "../data/technologies";
import { projects } from "../data/projects";
import { experience } from "../data/experience";
import { readTechSvg } from "./icons";

/**
 * Every tech id the page can render, in a stable order.
 *
 * Icons used to be inlined at each usage site via `set:html`, so a tech shown
 * in the skills grid, a project card and two experience roles shipped four
 * full copies of its SVG. Instead each icon is emitted once as a `<symbol>`
 * and referenced with `<use>`.
 */
export function usedTechIds(): string[] {
  const ids = new Set<string>();
  for (const category of technologies) {
    for (const item of category.items) ids.add(item.id);
  }
  for (const project of projects) {
    for (const id of project.technologies) ids.add(id);
    for (const id of project.platforms ?? []) ids.add(id);
  }
  for (const entry of experience) {
    for (const role of entry.roles) {
      for (const id of role.technologies) ids.add(id);
    }
  }
  // extraTech entries are only reachable through the references above, so
  // anything left over is unused and deliberately not shipped.
  return [...ids]
    .filter((id) => techById[id])
    .sort((a, b) => a.localeCompare(b));
}

/** `<use>` target for a tech id. */
export function symbolId(id: string): string {
  return `tech-${id}`;
}

const ROOT_TAG = /^\s*<svg([^>]*)>([\s\S]*)<\/svg>\s*$/;
const VIEWBOX = /viewBox="([^"]*)"/;
const FILL = /\sfill="([^"]*)"/;

/**
 * Rewrite every internal id so icons cannot collide once they share one
 * document. Devicon files use generic names (`id="a"`, `id="linux-original-a"`),
 * and `url(#a)` resolves against the whole document — eight icons declaring
 * `id="a"` meant seven of them referenced the wrong gradient.
 */
function namespaceIds(markup: string, prefix: string): string {
  const ids = new Set<string>();
  for (const [, id] of markup.matchAll(/\sid="([^"]+)"/g)) ids.add(id);
  let out = markup;
  for (const id of ids) {
    const escaped = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    out = out
      .replace(new RegExp(`\\sid="${escaped}"`, "g"), ` id="${prefix}-${id}"`)
      .replace(new RegExp(`url\\(#${escaped}\\)`, "g"), `url(#${prefix}-${id})`)
      .replace(
        new RegExp(`((?:xlink:)?href)="#${escaped}"`, "g"),
        `$1="#${prefix}-${id}"`,
      );
  }
  return out;
}

/**
 * The full sprite: one `<symbol>` per icon, emitted once per page.
 * Hidden from layout and from assistive tech; `<use>` still resolves.
 */
export function buildTechSprite(): string {
  const symbols = usedTechIds().map((id) => {
    const item = techById[id];
    const match = ROOT_TAG.exec(readTechSvg(item));
    if (!match) return "";
    const [, attrs, inner] = match;
    const viewBox = VIEWBOX.exec(attrs)?.[1] ?? "0 0 128 128";
    // A `fill` on the root is inherited by children, so carry it across.
    const fill = FILL.exec(attrs)?.[1];
    const fillAttr = fill ? ` fill="${fill}"` : "";
    const body = namespaceIds(inner, id);
    return `<symbol id="${symbolId(id)}" viewBox="${viewBox}"${fillAttr}>${body}</symbol>`;
  });

  return `<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" style="position:absolute;width:0;height:0;overflow:hidden">${symbols.join("")}</svg>`;
}
