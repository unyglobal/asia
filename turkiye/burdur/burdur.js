// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"burdur","repository":"asia","path":"turkiye/burdur","depth":2,"parent":"turkiye","children":["bucak"]});
export const childModules = Object.freeze({"bucak":"./bucak/bucak.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
