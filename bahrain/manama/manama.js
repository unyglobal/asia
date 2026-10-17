// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"manama","repository":"asia","path":"bahrain/manama","depth":2,"parent":"bahrain","children":["jidd-hafs","sitrah"]});
export const childModules = Object.freeze({"jidd-hafs":"./jidd-hafs/jidd-hafs.js","sitrah":"./sitrah/sitrah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
