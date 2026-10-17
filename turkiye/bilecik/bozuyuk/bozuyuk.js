// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bozuyuk","repository":"asia","path":"turkiye/bilecik/bozuyuk","depth":3,"parent":"turkiye/bilecik","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
