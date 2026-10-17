// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"shkhunat-histadrut-alef","repository":"asia","path":"israel/tel-aviv/bnei-brak/shkhunat-histadrut-alef","depth":4,"parent":"israel/tel-aviv/bnei-brak","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
