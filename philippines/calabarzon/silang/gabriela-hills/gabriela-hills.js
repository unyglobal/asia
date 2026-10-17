// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gabriela-hills","repository":"asia","path":"philippines/calabarzon/silang/gabriela-hills","depth":4,"parent":"philippines/calabarzon/silang","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
