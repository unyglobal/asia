// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"din-daeng","repository":"asia","path":"thailand/bangkok/din-daeng","depth":3,"parent":"thailand/bangkok","children":["ratchadapisek"]});
export const childModules = Object.freeze({"ratchadapisek":"./ratchadapisek/ratchadapisek.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
