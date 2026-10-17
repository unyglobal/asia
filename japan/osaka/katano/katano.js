// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"katano","repository":"asia","path":"japan/osaka/katano","depth":3,"parent":"japan/osaka","children":["ikuno"]});
export const childModules = Object.freeze({"ikuno":"./ikuno/ikuno.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
