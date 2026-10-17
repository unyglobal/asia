// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nilufer","repository":"asia","path":"turkiye/bursa-province/nilufer","depth":3,"parent":"turkiye/bursa-province","children":["ertugrul"]});
export const childModules = Object.freeze({"ertugrul":"./ertugrul/ertugrul.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
