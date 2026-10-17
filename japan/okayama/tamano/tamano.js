// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tamano","repository":"asia","path":"japan/okayama/tamano","depth":3,"parent":"japan/okayama","children":["tai"]});
export const childModules = Object.freeze({"tai":"./tai/tai.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
