// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sivas","repository":"asia","path":"turkiye/sivas","depth":2,"parent":"turkiye","children":["gemerek","sark-sla","susehri"]});
export const childModules = Object.freeze({"gemerek":"./gemerek/gemerek.js","sark-sla":"./sark-sla/sark-sla.js","susehri":"./susehri/susehri.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
