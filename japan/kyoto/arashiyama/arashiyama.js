// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"arashiyama","repository":"asia","path":"japan/kyoto/arashiyama","depth":3,"parent":"japan/kyoto","children":["sagano"]});
export const childModules = Object.freeze({"sagano":"./sagano/sagano.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
