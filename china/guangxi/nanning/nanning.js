// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nanning","repository":"asia","path":"china/guangxi/nanning","depth":3,"parent":"china/guangxi","children":["htunstar"]});
export const childModules = Object.freeze({"htunstar":"./htunstar/htunstar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
