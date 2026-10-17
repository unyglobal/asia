// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"akishima","repository":"asia","path":"japan/tokyo/akishima","depth":3,"parent":"japan/tokyo","children":["musashino"]});
export const childModules = Object.freeze({"musashino":"./musashino/musashino.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
