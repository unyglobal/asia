// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kelishad-va-sudarjan","repository":"asia","path":"iran/isfahan/kelishad-va-sudarjan","depth":3,"parent":"iran/isfahan","children":["mahalleh-ye-sudarjan"]});
export const childModules = Object.freeze({"mahalleh-ye-sudarjan":"./mahalleh-ye-sudarjan/mahalleh-ye-sudarjan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
