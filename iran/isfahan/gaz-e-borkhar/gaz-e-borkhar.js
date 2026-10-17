// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gaz-e-borkhar","repository":"asia","path":"iran/isfahan/gaz-e-borkhar","depth":3,"parent":"iran/isfahan","children":["mahalleh-ye-firuzabad","mahalleh-ye-hajji","mahalleh-ye-mahmudabad"]});
export const childModules = Object.freeze({"mahalleh-ye-firuzabad":"./mahalleh-ye-firuzabad/mahalleh-ye-firuzabad.js","mahalleh-ye-hajji":"./mahalleh-ye-hajji/mahalleh-ye-hajji.js","mahalleh-ye-mahmudabad":"./mahalleh-ye-mahmudabad/mahalleh-ye-mahmudabad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
