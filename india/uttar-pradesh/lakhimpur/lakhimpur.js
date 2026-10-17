// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lakhimpur","repository":"asia","path":"india/uttar-pradesh/lakhimpur","depth":3,"parent":"india/uttar-pradesh","children":["rajgarh"]});
export const childModules = Object.freeze({"rajgarh":"./rajgarh/rajgarh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
