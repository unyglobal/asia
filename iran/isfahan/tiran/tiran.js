// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tiran","repository":"asia","path":"iran/isfahan/tiran","depth":3,"parent":"iran/isfahan","children":["mahalleh-ye-sarpol"]});
export const childModules = Object.freeze({"mahalleh-ye-sarpol":"./mahalleh-ye-sarpol/mahalleh-ye-sarpol.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
