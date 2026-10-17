// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"urgup","repository":"asia","path":"turkiye/nevsehir-province/urgup","depth":3,"parent":"turkiye/nevsehir-province","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
