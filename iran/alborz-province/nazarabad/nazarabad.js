// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nazarabad","repository":"asia","path":"iran/alborz-province/nazarabad","depth":3,"parent":"iran/alborz-province","children":["mahalleh-ye-resalat"]});
export const childModules = Object.freeze({"mahalleh-ye-resalat":"./mahalleh-ye-resalat/mahalleh-ye-resalat.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
