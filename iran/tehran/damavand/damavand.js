// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"damavand","repository":"asia","path":"iran/tehran/damavand","depth":3,"parent":"iran/tehran","children":["mahalleh-ye-darvish"]});
export const childModules = Object.freeze({"mahalleh-ye-darvish":"./mahalleh-ye-darvish/mahalleh-ye-darvish.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
