// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kawachi-nagano","repository":"asia","path":"japan/osaka/kawachi-nagano","depth":3,"parent":"japan/osaka","children":["kiyomidai"]});
export const childModules = Object.freeze({"kiyomidai":"./kiyomidai/kiyomidai.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
