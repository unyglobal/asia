// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"shkhunat-halutsim","repository":"asia","path":"israel/northern-district/bet-she-an/shkhunat-halutsim","depth":4,"parent":"israel/northern-district/bet-she-an","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
