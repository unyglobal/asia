// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ardestan","repository":"asia","path":"iran/isfahan/ardestan","depth":3,"parent":"iran/isfahan","children":["mahalleh-ye-mown-sadat"]});
export const childModules = Object.freeze({"mahalleh-ye-mown-sadat":"./mahalleh-ye-mown-sadat/mahalleh-ye-mown-sadat.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
