// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"shahrak-e-ala-in","repository":"asia","path":"iran/tehran/shahrak-e-ala-in","depth":3,"parent":"iran/tehran","children":["aminabad","mahalleh-ye-taqiabad"]});
export const childModules = Object.freeze({"aminabad":"./aminabad/aminabad.js","mahalleh-ye-taqiabad":"./mahalleh-ye-taqiabad/mahalleh-ye-taqiabad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
