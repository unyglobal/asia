// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"matsumoto","repository":"asia","path":"japan/nagano/matsumoto","depth":3,"parent":"japan/nagano","children":["koyanagicho"]});
export const childModules = Object.freeze({"koyanagicho":"./koyanagicho/koyanagicho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
