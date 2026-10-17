// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tando-allahyar","repository":"asia","path":"pakistan/sindh/tando-allahyar","depth":3,"parent":"pakistan/sindh","children":["walidad-khaskheli"]});
export const childModules = Object.freeze({"walidad-khaskheli":"./walidad-khaskheli/walidad-khaskheli.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
