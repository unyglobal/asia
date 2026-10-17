// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"washinomiya","repository":"asia","path":"japan/saitama/washinomiya","depth":3,"parent":"japan/saitama","children":["sunahara"]});
export const childModules = Object.freeze({"sunahara":"./sunahara/sunahara.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
