import type { Localized } from "../data/personal";
import { technologies, type TechItem } from "../data/technologies";
import { projects, type Project } from "../data/projects";
import { experience, type ExperienceEntry } from "../data/experience";

/**
 * Tech ids a project can be filtered by: its stack plus the platforms it
 * ships on, since both are rendered as tech icons on the card.
 */
export function projectTechIds(project: Project): string[] {
  return [...new Set([...project.technologies, ...(project.platforms ?? [])])];
}

/** Tech ids an experience entry can be filtered by: the union of its roles. */
export function experienceTechIds(entry: ExperienceEntry): string[] {
  return [...new Set(entry.roles.flatMap((role) => role.technologies))];
}

export interface FilterOption {
  item: TechItem;
  /** Projects + experience entries using it. 0 means nothing to filter for. */
  count: number;
}

export interface FilterGroup {
  name: Localized;
  options: FilterOption[];
}

/** How many filterable cards reference each tech id, computed once. */
function countsById(): Map<string, number> {
  const counts = new Map<string, number>();
  const bump = (ids: string[]) => {
    for (const id of ids) counts.set(id, (counts.get(id) ?? 0) + 1);
  };
  for (const project of projects) bump(projectTechIds(project));
  for (const entry of experience) bump(experienceTechIds(entry));
  return counts;
}

/**
 * The skills grid, grouped exactly as the old Skills section grouped it, with
 * the match count each option would yield. Options with no matches are kept in
 * place (the grid reads as a complete toolbox) but the UI disables them.
 */
export function filterGroups(): FilterGroup[] {
  const counts = countsById();
  return technologies.map((category) => ({
    name: category.name,
    options: category.items.map((item) => ({
      item,
      count: counts.get(item.id) ?? 0,
    })),
  }));
}
