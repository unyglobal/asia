// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"wang-saphung","repository":"asia","path":"thailand/loei/wang-saphung","depth":3,"parent":"thailand/loei","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
