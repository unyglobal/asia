// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pattani","repository":"asia","path":"thailand/pattani","depth":2,"parent":"thailand","children":["yaring"]});
export const childModules = Object.freeze({"yaring":"./yaring/yaring.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
