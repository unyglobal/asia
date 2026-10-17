// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"borujerd","repository":"asia","path":"iran/lorestan-province/borujerd","depth":3,"parent":"iran/lorestan-province","children":["mahalleh-ye-qani"]});
export const childModules = Object.freeze({"mahalleh-ye-qani":"./mahalleh-ye-qani/mahalleh-ye-qani.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
