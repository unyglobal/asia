// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"alanya","repository":"asia","path":"turkiye/antalya/alanya","depth":3,"parent":"turkiye/antalya","children":["cars","kad-pasa","sekerhane","tophane"]});
export const childModules = Object.freeze({"cars":"./cars/cars.js","kad-pasa":"./kad-pasa/kad-pasa.js","sekerhane":"./sekerhane/sekerhane.js","tophane":"./tophane/tophane.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
