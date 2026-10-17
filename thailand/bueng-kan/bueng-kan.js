// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bueng-kan","repository":"asia","path":"thailand/bueng-kan","depth":2,"parent":"thailand","children":["seka"]});
export const childModules = Object.freeze({"seka":"./seka/seka.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
