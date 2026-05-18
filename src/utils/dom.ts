export function qs<T extends HTMLElement = HTMLElement>(sel: string, root: ParentNode = document): T {
  const el = root.querySelector(sel) as T | null;
  if (!el) throw new Error(`Element not found: ${sel}`);
  return el;
}

export function qsa<T extends HTMLElement = HTMLElement>(sel: string, root: ParentNode = document): T[] {
  return Array.from(root.querySelectorAll(sel)) as T[];
}
