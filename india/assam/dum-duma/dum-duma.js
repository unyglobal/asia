// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dum-duma","repository":"asia","path":"india/assam/dum-duma","depth":3,"parent":"india/assam","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
