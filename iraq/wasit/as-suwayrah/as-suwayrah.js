// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"as-suwayrah","repository":"asia","path":"iraq/wasit/as-suwayrah","depth":3,"parent":"iraq/wasit","children":["hayy-al-urubah"]});
export const childModules = Object.freeze({"hayy-al-urubah":"./hayy-al-urubah/hayy-al-urubah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
