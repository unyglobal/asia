// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kord-kuy","repository":"asia","path":"iran/golestan/kord-kuy","depth":3,"parent":"iran/golestan","children":["mahalleh-ye-bala-banuk","mahalleh-ye-hojjatabad"]});
export const childModules = Object.freeze({"mahalleh-ye-bala-banuk":"./mahalleh-ye-bala-banuk/mahalleh-ye-bala-banuk.js","mahalleh-ye-hojjatabad":"./mahalleh-ye-hojjatabad/mahalleh-ye-hojjatabad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
