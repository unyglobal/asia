// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"as-salifin","repository":"asia","path":"yemen/al-hudaydah/bayt-al-faqih/as-salifin","depth":4,"parent":"yemen/al-hudaydah/bayt-al-faqih","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
