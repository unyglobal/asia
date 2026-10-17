// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"shazand","repository":"asia","path":"iran/markazi/shazand","depth":3,"parent":"iran/markazi","children":["mahalleh-ye-azna"]});
export const childModules = Object.freeze({"mahalleh-ye-azna":"./mahalleh-ye-azna/mahalleh-ye-azna.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
