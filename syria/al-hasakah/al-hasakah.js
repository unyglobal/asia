// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-hasakah","repository":"asia","path":"syria/al-hasakah","depth":2,"parent":"syria","children":["ad-darbasiyah","al-malikiyah","al-qamishli","amuda"]});
export const childModules = Object.freeze({"ad-darbasiyah":"./ad-darbasiyah/ad-darbasiyah.js","al-malikiyah":"./al-malikiyah/al-malikiyah.js","al-qamishli":"./al-qamishli/al-qamishli.js","amuda":"./amuda/amuda.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
