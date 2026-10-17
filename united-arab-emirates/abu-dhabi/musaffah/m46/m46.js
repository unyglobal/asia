// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"m46","repository":"asia","path":"united-arab-emirates/abu-dhabi/musaffah/m46","depth":4,"parent":"united-arab-emirates/abu-dhabi/musaffah","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
