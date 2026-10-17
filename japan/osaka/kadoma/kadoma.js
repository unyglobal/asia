// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kadoma","repository":"asia","path":"japan/osaka/kadoma","depth":3,"parent":"japan/osaka","children":["hommachi"]});
export const childModules = Object.freeze({"hommachi":"./hommachi/hommachi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
