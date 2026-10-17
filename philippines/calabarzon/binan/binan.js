// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"binan","repository":"asia","path":"philippines/calabarzon/binan","depth":3,"parent":"philippines/calabarzon","children":["generoso-subdivision","honoria-subdivision","malayan-subdivision","saint-rose-village","victoria-subdivision"]});
export const childModules = Object.freeze({"generoso-subdivision":"./generoso-subdivision/generoso-subdivision.js","honoria-subdivision":"./honoria-subdivision/honoria-subdivision.js","malayan-subdivision":"./malayan-subdivision/malayan-subdivision.js","saint-rose-village":"./saint-rose-village/saint-rose-village.js","victoria-subdivision":"./victoria-subdivision/victoria-subdivision.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
