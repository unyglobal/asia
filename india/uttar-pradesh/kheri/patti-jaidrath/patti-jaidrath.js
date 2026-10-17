// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"patti-jaidrath","repository":"asia","path":"india/uttar-pradesh/kheri/patti-jaidrath","depth":4,"parent":"india/uttar-pradesh/kheri","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
