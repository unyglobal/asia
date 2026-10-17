// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tagbina","repository":"asia","path":"philippines/caraga/tagbina","depth":3,"parent":"philippines/caraga","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
