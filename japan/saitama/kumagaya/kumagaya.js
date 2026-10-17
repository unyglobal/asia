// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kumagaya","repository":"asia","path":"japan/saitama/kumagaya","depth":3,"parent":"japan/saitama","children":["ginza"]});
export const childModules = Object.freeze({"ginza":"./ginza/ginza.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
