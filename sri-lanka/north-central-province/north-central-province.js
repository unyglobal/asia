// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"north-central-province","repository":"asia","path":"sri-lanka/north-central-province","depth":2,"parent":"sri-lanka","children":["anuradhapura"]});
export const childModules = Object.freeze({"anuradhapura":"./anuradhapura/anuradhapura.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
