// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"krajan-tayu-wetan","repository":"asia","path":"indonesia/central-java/tayu/krajan-tayu-wetan","depth":4,"parent":"indonesia/central-java/tayu","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
