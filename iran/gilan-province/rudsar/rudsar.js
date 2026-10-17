// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rudsar","repository":"asia","path":"iran/gilan-province/rudsar","depth":3,"parent":"iran/gilan-province","children":["mahalleh-ye-taleh"]});
export const childModules = Object.freeze({"mahalleh-ye-taleh":"./mahalleh-ye-taleh/mahalleh-ye-taleh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
