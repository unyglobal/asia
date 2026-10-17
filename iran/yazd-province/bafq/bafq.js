// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bafq","repository":"asia","path":"iran/yazd-province/bafq","depth":3,"parent":"iran/yazd-province","children":["kavi-mehdiyeh","mahalleh-ye-haniyeh","mahalleh-ye-shaqayegh"]});
export const childModules = Object.freeze({"kavi-mehdiyeh":"./kavi-mehdiyeh/kavi-mehdiyeh.js","mahalleh-ye-haniyeh":"./mahalleh-ye-haniyeh/mahalleh-ye-haniyeh.js","mahalleh-ye-shaqayegh":"./mahalleh-ye-shaqayegh/mahalleh-ye-shaqayegh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
