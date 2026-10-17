// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ap-mot","repository":"asia","path":"vietnam/an-giang/long-xuyen/ap-mot","depth":4,"parent":"vietnam/an-giang/long-xuyen","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
