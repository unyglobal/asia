// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nishishinminato","repository":"asia","path":"japan/toyama/nishishinminato","depth":3,"parent":"japan/toyama","children":["hommachi"]});
export const childModules = Object.freeze({"hommachi":"./hommachi/hommachi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
