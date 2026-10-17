// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bolu","repository":"asia","path":"turkiye/bolu","depth":2,"parent":"turkiye","children":["gerede"]});
export const childModules = Object.freeze({"gerede":"./gerede/gerede.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
