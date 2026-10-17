// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"saiku","repository":"asia","path":"japan/mie/saiku","depth":3,"parent":"japan/mie","children":["myojo"]});
export const childModules = Object.freeze({"myojo":"./myojo/myojo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
