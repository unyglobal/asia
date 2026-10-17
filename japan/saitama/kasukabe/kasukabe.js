// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kasukabe","repository":"asia","path":"japan/saitama/kasukabe","depth":3,"parent":"japan/saitama","children":["chuo"]});
export const childModules = Object.freeze({"chuo":"./chuo/chuo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
