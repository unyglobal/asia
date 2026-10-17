// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ang-thong","repository":"asia","path":"thailand/ang-thong","depth":2,"parent":"thailand","children":["wiset-chaichan"]});
export const childModules = Object.freeze({"wiset-chaichan":"./wiset-chaichan/wiset-chaichan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
