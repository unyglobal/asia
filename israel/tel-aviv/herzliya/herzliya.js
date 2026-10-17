// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"herzliya","repository":"asia","path":"israel/tel-aviv/herzliya","depth":3,"parent":"israel/tel-aviv","children":["hertsliyya-b"]});
export const childModules = Object.freeze({"hertsliyya-b":"./hertsliyya-b/hertsliyya-b.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
