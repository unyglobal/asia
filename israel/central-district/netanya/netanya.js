// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"netanya","repository":"asia","path":"israel/central-district/netanya","depth":3,"parent":"israel/central-district","children":["um-khalid"]});
export const childModules = Object.freeze({"um-khalid":"./um-khalid/um-khalid.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
