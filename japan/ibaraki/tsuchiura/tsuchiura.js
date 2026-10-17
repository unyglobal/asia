// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tsuchiura","repository":"asia","path":"japan/ibaraki/tsuchiura","depth":3,"parent":"japan/ibaraki","children":["kohoku","manabe"]});
export const childModules = Object.freeze({"kohoku":"./kohoku/kohoku.js","manabe":"./manabe/manabe.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
