// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"stantsiya-novyy-afon","repository":"asia","path":"georgia/abkhazia/stantsiya-novyy-afon","depth":3,"parent":"georgia/abkhazia","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
