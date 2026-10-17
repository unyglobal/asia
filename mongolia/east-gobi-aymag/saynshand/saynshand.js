// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"saynshand","repository":"asia","path":"mongolia/east-gobi-aymag/saynshand","depth":3,"parent":"mongolia/east-gobi-aymag","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
