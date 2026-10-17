// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"naha","repository":"asia","path":"japan/okinawa/naha","depth":3,"parent":"japan/okinawa","children":["kume"]});
export const childModules = Object.freeze({"kume":"./kume/kume.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
