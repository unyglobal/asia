// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hadar-ramatayim","repository":"asia","path":"israel/central-district/hod-hasharon/hadar-ramatayim","depth":4,"parent":"israel/central-district/hod-hasharon","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
