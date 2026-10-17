// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kyokonsha","repository":"asia","path":"japan/tochigi/kuroiso/kyokonsha","depth":4,"parent":"japan/tochigi/kuroiso","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
