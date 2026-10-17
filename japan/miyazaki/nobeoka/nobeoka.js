// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nobeoka","repository":"asia","path":"japan/miyazaki/nobeoka","depth":3,"parent":"japan/miyazaki","children":["okatomi"]});
export const childModules = Object.freeze({"okatomi":"./okatomi/okatomi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
