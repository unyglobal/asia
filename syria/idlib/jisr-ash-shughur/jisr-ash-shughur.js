// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jisr-ash-shughur","repository":"asia","path":"syria/idlib/jisr-ash-shughur","depth":3,"parent":"syria/idlib","children":["hayy-al-mashfa"]});
export const childModules = Object.freeze({"hayy-al-mashfa":"./hayy-al-mashfa/hayy-al-mashfa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
