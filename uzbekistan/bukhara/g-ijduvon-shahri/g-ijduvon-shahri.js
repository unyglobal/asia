// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"g-ijduvon-shahri","repository":"asia","path":"uzbekistan/bukhara/g-ijduvon-shahri","depth":3,"parent":"uzbekistan/bukhara","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
