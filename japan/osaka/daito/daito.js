// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"daito","repository":"asia","path":"japan/osaka/daito","depth":3,"parent":"japan/osaka","children":["daitocho"]});
export const childModules = Object.freeze({"daitocho":"./daitocho/daitocho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
