// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tokorozawa","repository":"asia","path":"japan/saitama/tokorozawa","depth":3,"parent":"japan/saitama","children":["miyamotocho"]});
export const childModules = Object.freeze({"miyamotocho":"./miyamotocho/miyamotocho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
