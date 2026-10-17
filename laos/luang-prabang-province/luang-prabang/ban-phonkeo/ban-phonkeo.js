// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ban-phonkeo","repository":"asia","path":"laos/luang-prabang-province/luang-prabang/ban-phonkeo","depth":4,"parent":"laos/luang-prabang-province/luang-prabang","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
