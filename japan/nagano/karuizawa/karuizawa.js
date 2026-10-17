// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"karuizawa","repository":"asia","path":"japan/nagano/karuizawa","depth":3,"parent":"japan/nagano","children":["shinkaruizawa"]});
export const childModules = Object.freeze({"shinkaruizawa":"./shinkaruizawa/shinkaruizawa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
