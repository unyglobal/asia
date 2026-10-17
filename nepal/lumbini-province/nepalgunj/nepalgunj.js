// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nepalgunj","repository":"asia","path":"nepal/lumbini-province/nepalgunj","depth":3,"parent":"nepal/lumbini-province","children":["bakegau"]});
export const childModules = Object.freeze({"bakegau":"./bakegau/bakegau.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
