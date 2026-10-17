// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"phang-nga","repository":"asia","path":"thailand/phang-nga","depth":2,"parent":"thailand","children":["takua-pa"]});
export const childModules = Object.freeze({"takua-pa":"./takua-pa/takua-pa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
