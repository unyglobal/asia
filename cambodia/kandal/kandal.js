// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kandal","repository":"asia","path":"cambodia/kandal","depth":2,"parent":"cambodia","children":["ta-khmau"]});
export const childModules = Object.freeze({"ta-khmau":"./ta-khmau/ta-khmau.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
