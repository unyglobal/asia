// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mahalleh-ye-do-khvaharan","repository":"asia","path":"iran/hamadan-province/nahavand/mahalleh-ye-do-khvaharan","depth":4,"parent":"iran/hamadan-province/nahavand","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
