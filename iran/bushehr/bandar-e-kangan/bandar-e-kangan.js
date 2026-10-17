// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bandar-e-kangan","repository":"asia","path":"iran/bushehr/bandar-e-kangan","depth":3,"parent":"iran/bushehr","children":["mahalleh-ye-gaz-bolbol","mahalleh-ye-hoseynabad"]});
export const childModules = Object.freeze({"mahalleh-ye-gaz-bolbol":"./mahalleh-ye-gaz-bolbol/mahalleh-ye-gaz-bolbol.js","mahalleh-ye-hoseynabad":"./mahalleh-ye-hoseynabad/mahalleh-ye-hoseynabad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
