// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"irosin","repository":"asia","path":"philippines/bicol-region/irosin","depth":3,"parent":"philippines/bicol-region","children":["bacolod","carriedo-irosin"]});
export const childModules = Object.freeze({"bacolod":"./bacolod/bacolod.js","carriedo-irosin":"./carriedo-irosin/carriedo-irosin.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
