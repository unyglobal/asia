// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bang-kruai","repository":"asia","path":"thailand/nonthaburi/bang-kruai","depth":3,"parent":"thailand/nonthaburi","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
