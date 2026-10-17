// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tabriz","repository":"asia","path":"iran/east-azerbaijan/tabriz","depth":3,"parent":"iran/east-azerbaijan","children":["mahalleh-ye-maqsudiyeh"]});
export const childModules = Object.freeze({"mahalleh-ye-maqsudiyeh":"./mahalleh-ye-maqsudiyeh/mahalleh-ye-maqsudiyeh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
