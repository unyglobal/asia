// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"abatganj","repository":"asia","path":"india/jharkhand/medininagar/abatganj","depth":4,"parent":"india/jharkhand/medininagar","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
