// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yotsukaido","repository":"asia","path":"japan/chiba/yotsukaido","depth":3,"parent":"japan/chiba","children":["utsukushigaoka"]});
export const childModules = Object.freeze({"utsukushigaoka":"./utsukushigaoka/utsukushigaoka.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
