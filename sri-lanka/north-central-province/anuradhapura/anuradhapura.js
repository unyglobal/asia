// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"anuradhapura","repository":"asia","path":"sri-lanka/north-central-province/anuradhapura","depth":3,"parent":"sri-lanka/north-central-province","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
