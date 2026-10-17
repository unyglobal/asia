// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"be-er-ya-aqov","repository":"asia","path":"israel/central-district/be-er-ya-aqov","depth":3,"parent":"israel/central-district","children":["shikun-hertsl","shikun-rambam"]});
export const childModules = Object.freeze({"shikun-hertsl":"./shikun-hertsl/shikun-hertsl.js","shikun-rambam":"./shikun-rambam/shikun-rambam.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
