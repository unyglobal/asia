// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"suzuka","repository":"asia","path":"japan/mie/suzuka","depth":3,"parent":"japan/mie","children":["kambe"]});
export const childModules = Object.freeze({"kambe":"./kambe/kambe.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
