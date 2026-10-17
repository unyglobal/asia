// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nishifukuma","repository":"asia","path":"japan/fukuoka/nishifukuma","depth":3,"parent":"japan/fukuoka","children":["hanamigahama","hanamigaoka"]});
export const childModules = Object.freeze({"hanamigahama":"./hanamigahama/hanamigahama.js","hanamigaoka":"./hanamigaoka/hanamigaoka.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
