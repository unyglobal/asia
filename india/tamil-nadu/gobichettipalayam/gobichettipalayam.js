// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gobichettipalayam","repository":"asia","path":"india/tamil-nadu/gobichettipalayam","depth":3,"parent":"india/tamil-nadu","children":["puduppalaiyam"]});
export const childModules = Object.freeze({"puduppalaiyam":"./puduppalaiyam/puduppalaiyam.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
