// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zugdidi","repository":"asia","path":"georgia/samegrelo-and-zemo-svaneti/zugdidi","depth":3,"parent":"georgia/samegrelo-and-zemo-svaneti","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
