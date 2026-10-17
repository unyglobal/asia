// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sakaecho","repository":"asia","path":"japan/kanagawa/odawara/sakaecho","depth":4,"parent":"japan/kanagawa/odawara","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
