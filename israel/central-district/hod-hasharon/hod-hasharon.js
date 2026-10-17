// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hod-hasharon","repository":"asia","path":"israel/central-district/hod-hasharon","depth":3,"parent":"israel/central-district","children":["hadar-ramatayim"]});
export const childModules = Object.freeze({"hadar-ramatayim":"./hadar-ramatayim/hadar-ramatayim.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
