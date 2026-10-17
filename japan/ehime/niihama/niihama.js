// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"niihama","repository":"asia","path":"japan/ehime/niihama","depth":3,"parent":"japan/ehime","children":["shinonomecho"]});
export const childModules = Object.freeze({"shinonomecho":"./shinonomecho/shinonomecho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
