// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mount-lebanon","repository":"asia","path":"lebanon/mount-lebanon","depth":2,"parent":"lebanon","children":["aley","byblos","jounieh"]});
export const childModules = Object.freeze({"aley":"./aley/aley.js","byblos":"./byblos/byblos.js","jounieh":"./jounieh/jounieh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
