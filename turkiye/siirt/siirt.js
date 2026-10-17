// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"siirt","repository":"asia","path":"turkiye/siirt","depth":2,"parent":"turkiye","children":["kurtalan"]});
export const childModules = Object.freeze({"kurtalan":"./kurtalan/kurtalan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
