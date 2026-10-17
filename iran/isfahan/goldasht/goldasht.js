// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"goldasht","repository":"asia","path":"iran/isfahan/goldasht","depth":3,"parent":"iran/isfahan","children":["mahalleh-ye-makaruni-ye-ja-farabad"]});
export const childModules = Object.freeze({"mahalleh-ye-makaruni-ye-ja-farabad":"./mahalleh-ye-makaruni-ye-ja-farabad/mahalleh-ye-makaruni-ye-ja-farabad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
