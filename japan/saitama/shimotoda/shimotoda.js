// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"shimotoda","repository":"asia","path":"japan/saitama/shimotoda","depth":3,"parent":"japan/saitama","children":["nakacho","shimomae"]});
export const childModules = Object.freeze({"nakacho":"./nakacho/nakacho.js","shimomae":"./shimomae/shimomae.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
