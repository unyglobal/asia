// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mahalleh-ye-zir-tall","repository":"asia","path":"iran/kohgiluyeh-and-boyer-ahmad/yasuj/mahalleh-ye-zir-tall","depth":4,"parent":"iran/kohgiluyeh-and-boyer-ahmad/yasuj","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
