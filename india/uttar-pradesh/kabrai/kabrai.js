// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kabrai","repository":"asia","path":"india/uttar-pradesh/kabrai","depth":3,"parent":"india/uttar-pradesh","children":["mochipura"]});
export const childModules = Object.freeze({"mochipura":"./mochipura/mochipura.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
