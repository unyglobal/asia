// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"long-xuyen","repository":"asia","path":"vietnam/an-giang/long-xuyen","depth":3,"parent":"vietnam/an-giang","children":["ap-mot"]});
export const childModules = Object.freeze({"ap-mot":"./ap-mot/ap-mot.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
