// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kamo","repository":"asia","path":"japan/niigata/kamo","depth":3,"parent":"japan/niigata","children":["ishikawa","saiwaicho"]});
export const childModules = Object.freeze({"ishikawa":"./ishikawa/ishikawa.js","saiwaicho":"./saiwaicho/saiwaicho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
