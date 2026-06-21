import fs from "node:fs";
import path from "node:path";
import type { TechItem } from "../data/technologies";

const cache = new Map<string, string>();

export function readTechSvg(item: TechItem): string {
  const key = item.devicon ?? item.icon!;
  if (cache.has(key)) return cache.get(key)!;

  const svgPath = item.devicon
    ? path.join(
        process.cwd(),
        "node_modules/devicon/icons",
        `${item.devicon}.svg`,
      )
    : path.join(process.cwd(), "public/icons/tech", item.icon!);

  const content = fs.readFileSync(svgPath, "utf-8");
  cache.set(key, content);
  return content;
}
