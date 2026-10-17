// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"atsugi","repository":"asia","path":"japan/kanagawa/atsugi","depth":3,"parent":"japan/kanagawa","children":["kotobukicho","nakacho"]});
export const childModules = Object.freeze({"kotobukicho":"./kotobukicho/kotobukicho.js","nakacho":"./nakacho/nakacho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
