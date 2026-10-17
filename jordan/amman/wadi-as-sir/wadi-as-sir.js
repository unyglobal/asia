// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"wadi-as-sir","repository":"asia","path":"jordan/amman/wadi-as-sir","depth":3,"parent":"jordan/amman","children":["hayy-as-sanawbar"]});
export const childModules = Object.freeze({"hayy-as-sanawbar":"./hayy-as-sanawbar/hayy-as-sanawbar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
