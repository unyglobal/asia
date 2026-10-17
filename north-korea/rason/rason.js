// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rason","repository":"asia","path":"north-korea/rason","depth":2,"parent":"north-korea","children":["rajin","sonbong","unggi"]});
export const childModules = Object.freeze({"rajin":"./rajin/rajin.js","sonbong":"./sonbong/sonbong.js","unggi":"./unggi/unggi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
