// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kirkuk","repository":"asia","path":"iraq/kirkuk","depth":2,"parent":"iraq","children":["tazah-khurmatu"]});
export const childModules = Object.freeze({"tazah-khurmatu":"./tazah-khurmatu/tazah-khurmatu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
