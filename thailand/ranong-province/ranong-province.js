// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ranong-province","repository":"asia","path":"thailand/ranong-province","depth":2,"parent":"thailand","children":["ranong"]});
export const childModules = Object.freeze({"ranong":"./ranong/ranong.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
