// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gosen","repository":"asia","path":"japan/niigata/gosen","depth":3,"parent":"japan/niigata","children":["minamihoncho","yokomachi"]});
export const childModules = Object.freeze({"minamihoncho":"./minamihoncho/minamihoncho.js","yokomachi":"./yokomachi/yokomachi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
