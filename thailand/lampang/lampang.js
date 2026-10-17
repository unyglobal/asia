// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lampang","repository":"asia","path":"thailand/lampang","depth":2,"parent":"thailand","children":["thoen"]});
export const childModules = Object.freeze({"thoen":"./thoen/thoen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
