// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-jawf","repository":"asia","path":"yemen/al-jawf","depth":2,"parent":"yemen","children":["al-hazm"]});
export const childModules = Object.freeze({"al-hazm":"./al-hazm/al-hazm.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
