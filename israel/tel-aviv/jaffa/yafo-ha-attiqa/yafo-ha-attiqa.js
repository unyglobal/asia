// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yafo-ha-attiqa","repository":"asia","path":"israel/tel-aviv/jaffa/yafo-ha-attiqa","depth":4,"parent":"israel/tel-aviv/jaffa","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
