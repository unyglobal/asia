// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sandacho","repository":"asia","path":"japan/hyogo/sandacho","depth":3,"parent":"japan/hyogo","children":["minamigaoka","miwa","nishiyama"]});
export const childModules = Object.freeze({"minamigaoka":"./minamigaoka/minamigaoka.js","miwa":"./miwa/miwa.js","nishiyama":"./nishiyama/nishiyama.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
