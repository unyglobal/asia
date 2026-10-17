// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"babolsar","repository":"asia","path":"iran/mazandaran/babolsar","depth":3,"parent":"iran/mazandaran","children":["mahalleh-ye-kazemabad","shahrak-e-daneshgah"]});
export const childModules = Object.freeze({"mahalleh-ye-kazemabad":"./mahalleh-ye-kazemabad/mahalleh-ye-kazemabad.js","shahrak-e-daneshgah":"./shahrak-e-daneshgah/shahrak-e-daneshgah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
