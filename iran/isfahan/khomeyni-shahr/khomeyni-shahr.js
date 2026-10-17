// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"khomeyni-shahr","repository":"asia","path":"iran/isfahan/khomeyni-shahr","depth":3,"parent":"iran/isfahan","children":["mahalleh-ye-darb-e-seyyed","mahalleh-ye-now","mahalleh-ye-shamsabad"]});
export const childModules = Object.freeze({"mahalleh-ye-darb-e-seyyed":"./mahalleh-ye-darb-e-seyyed/mahalleh-ye-darb-e-seyyed.js","mahalleh-ye-now":"./mahalleh-ye-now/mahalleh-ye-now.js","mahalleh-ye-shamsabad":"./mahalleh-ye-shamsabad/mahalleh-ye-shamsabad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
