// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chiyoda","repository":"asia","path":"japan/tokyo/chiyoda","depth":3,"parent":"japan/tokyo","children":["hayabusacho"]});
export const childModules = Object.freeze({"hayabusacho":"./hayabusacho/hayabusacho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
