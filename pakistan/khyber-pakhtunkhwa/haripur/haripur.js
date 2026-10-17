// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"haripur","repository":"asia","path":"pakistan/khyber-pakhtunkhwa/haripur","depth":3,"parent":"pakistan/khyber-pakhtunkhwa","children":["mahalla"]});
export const childModules = Object.freeze({"mahalla":"./mahalla/mahalla.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
