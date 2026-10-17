// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"otar-meanchey","repository":"asia","path":"cambodia/otar-meanchey","depth":2,"parent":"cambodia","children":["anlong-veaeng","samraong"]});
export const childModules = Object.freeze({"anlong-veaeng":"./anlong-veaeng/anlong-veaeng.js","samraong":"./samraong/samraong.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
