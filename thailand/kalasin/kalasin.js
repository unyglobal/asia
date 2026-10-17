// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kalasin","repository":"asia","path":"thailand/kalasin","depth":2,"parent":"thailand","children":["kamalasai","khao-wong","kuchinarai","nong-kung-si"]});
export const childModules = Object.freeze({"kamalasai":"./kamalasai/kamalasai.js","khao-wong":"./khao-wong/khao-wong.js","kuchinarai":"./kuchinarai/kuchinarai.js","nong-kung-si":"./nong-kung-si/nong-kung-si.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
