// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"phayao","repository":"asia","path":"thailand/phayao","depth":2,"parent":"thailand","children":["dok-kham-tai"]});
export const childModules = Object.freeze({"dok-kham-tai":"./dok-kham-tai/dok-kham-tai.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
