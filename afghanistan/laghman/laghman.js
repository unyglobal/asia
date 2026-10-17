// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"laghman","repository":"asia","path":"afghanistan/laghman","depth":2,"parent":"afghanistan","children":["mehtar-lam"]});
export const childModules = Object.freeze({"mehtar-lam":"./mehtar-lam/mehtar-lam.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
