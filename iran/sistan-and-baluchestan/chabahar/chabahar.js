// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chabahar","repository":"asia","path":"iran/sistan-and-baluchestan/chabahar","depth":3,"parent":"iran/sistan-and-baluchestan","children":["mahalleh-ye-sirabad"]});
export const childModules = Object.freeze({"mahalleh-ye-sirabad":"./mahalleh-ye-sirabad/mahalleh-ye-sirabad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
