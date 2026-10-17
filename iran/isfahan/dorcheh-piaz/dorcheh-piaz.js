// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dorcheh-piaz","repository":"asia","path":"iran/isfahan/dorcheh-piaz","depth":3,"parent":"iran/isfahan","children":["mahalleh-ye-dur"]});
export const childModules = Object.freeze({"mahalleh-ye-dur":"./mahalleh-ye-dur/mahalleh-ye-dur.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
