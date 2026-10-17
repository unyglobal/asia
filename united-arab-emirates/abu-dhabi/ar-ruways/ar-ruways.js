// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ar-ruways","repository":"asia","path":"united-arab-emirates/abu-dhabi/ar-ruways","depth":3,"parent":"united-arab-emirates/abu-dhabi","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
