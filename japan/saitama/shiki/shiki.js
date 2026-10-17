// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"shiki","repository":"asia","path":"japan/saitama/shiki","depth":3,"parent":"japan/saitama","children":["honcho"]});
export const childModules = Object.freeze({"honcho":"./honcho/honcho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
