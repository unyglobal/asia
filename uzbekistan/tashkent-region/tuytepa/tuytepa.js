// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tuytepa","repository":"asia","path":"uzbekistan/tashkent-region/tuytepa","depth":3,"parent":"uzbekistan/tashkent-region","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
