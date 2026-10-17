// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bargarh","repository":"asia","path":"india/odisha/bargarh","depth":3,"parent":"india/odisha","children":["khajurtikra","sarai"]});
export const childModules = Object.freeze({"khajurtikra":"./khajurtikra/khajurtikra.js","sarai":"./sarai/sarai.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
