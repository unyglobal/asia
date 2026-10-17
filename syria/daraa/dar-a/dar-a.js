// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dar-a","repository":"asia","path":"syria/daraa/dar-a","depth":3,"parent":"syria/daraa","children":["hayy-as-sahhari"]});
export const childModules = Object.freeze({"hayy-as-sahhari":"./hayy-as-sahhari/hayy-as-sahhari.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
