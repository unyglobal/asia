// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"busan","repository":"asia","path":"south-korea/busan","depth":2,"parent":"south-korea","children":["gijang"]});
export const childModules = Object.freeze({"gijang":"./gijang/gijang.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
