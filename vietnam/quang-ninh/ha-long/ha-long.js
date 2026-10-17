// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ha-long","repository":"asia","path":"vietnam/quang-ninh/ha-long","depth":3,"parent":"vietnam/quang-ninh","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
