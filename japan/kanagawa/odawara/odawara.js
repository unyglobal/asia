// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"odawara","repository":"asia","path":"japan/kanagawa/odawara","depth":3,"parent":"japan/kanagawa","children":["sakaecho"]});
export const childModules = Object.freeze({"sakaecho":"./sakaecho/sakaecho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
