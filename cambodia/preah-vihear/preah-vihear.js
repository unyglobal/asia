// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"preah-vihear","repository":"asia","path":"cambodia/preah-vihear","depth":2,"parent":"cambodia","children":["tbeng-meanchey"]});
export const childModules = Object.freeze({"tbeng-meanchey":"./tbeng-meanchey/tbeng-meanchey.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
