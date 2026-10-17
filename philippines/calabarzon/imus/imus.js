// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"imus","repository":"asia","path":"philippines/calabarzon/imus","depth":3,"parent":"philippines/calabarzon","children":["abad-homes","e-villanueva-subdivision","santiago-subdivision","vina-subdivision"]});
export const childModules = Object.freeze({"abad-homes":"./abad-homes/abad-homes.js","e-villanueva-subdivision":"./e-villanueva-subdivision/e-villanueva-subdivision.js","santiago-subdivision":"./santiago-subdivision/santiago-subdivision.js","vina-subdivision":"./vina-subdivision/vina-subdivision.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
