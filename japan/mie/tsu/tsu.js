// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tsu","repository":"asia","path":"japan/mie/tsu","depth":3,"parent":"japan/mie","children":["sakaemachi"]});
export const childModules = Object.freeze({"sakaemachi":"./sakaemachi/sakaemachi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
