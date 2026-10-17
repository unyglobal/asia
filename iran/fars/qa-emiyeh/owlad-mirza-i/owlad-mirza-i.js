// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"owlad-mirza-i","repository":"asia","path":"iran/fars/qa-emiyeh/owlad-mirza-i","depth":4,"parent":"iran/fars/qa-emiyeh","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
