// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"saijo","repository":"asia","path":"japan/ehime/saijo","depth":3,"parent":"japan/ehime","children":["tsuitachi"]});
export const childModules = Object.freeze({"tsuitachi":"./tsuitachi/tsuitachi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
