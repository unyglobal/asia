// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lavasan","repository":"asia","path":"iran/tehran/lavasan","depth":3,"parent":"iran/tehran","children":["mahalleh-ye-gandovak","najjar-kala"]});
export const childModules = Object.freeze({"mahalleh-ye-gandovak":"./mahalleh-ye-gandovak/mahalleh-ye-gandovak.js","najjar-kala":"./najjar-kala/najjar-kala.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
