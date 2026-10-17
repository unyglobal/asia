// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"meybod","repository":"asia","path":"iran/yazd-province/meybod","depth":3,"parent":"iran/yazd-province","children":["akbarabad","mahalleh-ye-mehr-jerd"]});
export const childModules = Object.freeze({"akbarabad":"./akbarabad/akbarabad.js","mahalleh-ye-mehr-jerd":"./mahalleh-ye-mehr-jerd/mahalleh-ye-mehr-jerd.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
