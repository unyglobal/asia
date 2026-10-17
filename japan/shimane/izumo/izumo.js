// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"izumo","repository":"asia","path":"japan/shimane/izumo","depth":3,"parent":"japan/shimane","children":["imaichicho"]});
export const childModules = Object.freeze({"imaichicho":"./imaichicho/imaichicho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
