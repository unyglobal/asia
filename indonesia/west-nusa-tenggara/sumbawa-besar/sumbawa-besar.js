// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sumbawa-besar","repository":"asia","path":"indonesia/west-nusa-tenggara/sumbawa-besar","depth":3,"parent":"indonesia/west-nusa-tenggara","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
