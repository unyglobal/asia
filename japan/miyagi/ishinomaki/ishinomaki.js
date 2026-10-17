// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ishinomaki","repository":"asia","path":"japan/miyagi/ishinomaki","depth":3,"parent":"japan/miyagi","children":["hiyorigaoka","minamihamacho","nankocho"]});
export const childModules = Object.freeze({"hiyorigaoka":"./hiyorigaoka/hiyorigaoka.js","minamihamacho":"./minamihamacho/minamihamacho.js","nankocho":"./nankocho/nankocho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
