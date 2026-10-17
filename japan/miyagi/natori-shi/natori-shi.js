// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"natori-shi","repository":"asia","path":"japan/miyagi/natori-shi","depth":3,"parent":"japan/miyagi","children":["hakozuka","natorigaoka","oyama"]});
export const childModules = Object.freeze({"hakozuka":"./hakozuka/hakozuka.js","natorigaoka":"./natorigaoka/natorigaoka.js","oyama":"./oyama/oyama.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
