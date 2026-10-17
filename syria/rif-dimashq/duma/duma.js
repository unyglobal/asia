// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"duma","repository":"asia","path":"syria/rif-dimashq/duma","depth":3,"parent":"syria/rif-dimashq","children":["ard-iyar"]});
export const childModules = Object.freeze({"ard-iyar":"./ard-iyar/ard-iyar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
