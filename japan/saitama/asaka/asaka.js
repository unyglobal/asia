// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"asaka","repository":"asia","path":"japan/saitama/asaka","depth":3,"parent":"japan/saitama","children":["honcho","oka"]});
export const childModules = Object.freeze({"honcho":"./honcho/honcho.js","oka":"./oka/oka.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
