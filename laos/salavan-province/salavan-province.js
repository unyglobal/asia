// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"salavan-province","repository":"asia","path":"laos/salavan-province","depth":2,"parent":"laos","children":["ban-laongam"]});
export const childModules = Object.freeze({"ban-laongam":"./ban-laongam/ban-laongam.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
