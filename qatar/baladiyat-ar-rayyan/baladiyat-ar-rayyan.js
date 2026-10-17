// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"baladiyat-ar-rayyan","repository":"asia","path":"qatar/baladiyat-ar-rayyan","depth":2,"parent":"qatar","children":["ar-rayyan","farij-al-amir","mu-aydhir-rawdat-rashid"]});
export const childModules = Object.freeze({"ar-rayyan":"./ar-rayyan/ar-rayyan.js","farij-al-amir":"./farij-al-amir/farij-al-amir.js","mu-aydhir-rawdat-rashid":"./mu-aydhir-rawdat-rashid/mu-aydhir-rawdat-rashid.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
