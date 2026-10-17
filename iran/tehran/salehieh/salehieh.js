// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"salehieh","repository":"asia","path":"iran/tehran/salehieh","depth":3,"parent":"iran/tehran","children":["mahalleh-ye-hesar-e-chupan"]});
export const childModules = Object.freeze({"mahalleh-ye-hesar-e-chupan":"./mahalleh-ye-hesar-e-chupan/mahalleh-ye-hesar-e-chupan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
