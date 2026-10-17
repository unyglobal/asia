// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gotemba","repository":"asia","path":"japan/shizuoka/gotemba","depth":3,"parent":"japan/shizuoka","children":["kayanoki"]});
export const childModules = Object.freeze({"kayanoki":"./kayanoki/kayanoki.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
