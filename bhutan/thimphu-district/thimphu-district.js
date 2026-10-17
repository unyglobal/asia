// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"thimphu-district","repository":"asia","path":"bhutan/thimphu-district","depth":2,"parent":"bhutan","children":["thimphu"]});
export const childModules = Object.freeze({"thimphu":"./thimphu/thimphu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
