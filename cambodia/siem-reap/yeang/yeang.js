// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yeang","repository":"asia","path":"cambodia/siem-reap/yeang","depth":3,"parent":"cambodia/siem-reap","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
