// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tiberias","repository":"asia","path":"israel/northern-district/tiberias","depth":3,"parent":"israel/northern-district","children":["shkunat-david-remez"]});
export const childModules = Object.freeze({"shkunat-david-remez":"./shkunat-david-remez/shkunat-david-remez.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
