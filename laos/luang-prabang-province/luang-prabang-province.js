// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"luang-prabang-province","repository":"asia","path":"laos/luang-prabang-province","depth":2,"parent":"laos","children":["luang-prabang"]});
export const childModules = Object.freeze({"luang-prabang":"./luang-prabang/luang-prabang.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
