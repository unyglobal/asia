// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kentron","repository":"asia","path":"armenia/yerevan/kentron","depth":3,"parent":"armenia/yerevan","children":["dzoragyugh"]});
export const childModules = Object.freeze({"dzoragyugh":"./dzoragyugh/dzoragyugh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
