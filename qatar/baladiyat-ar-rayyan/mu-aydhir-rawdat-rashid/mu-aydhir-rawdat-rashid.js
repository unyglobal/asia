// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mu-aydhir-rawdat-rashid","repository":"asia","path":"qatar/baladiyat-ar-rayyan/mu-aydhir-rawdat-rashid","depth":3,"parent":"qatar/baladiyat-ar-rayyan","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
