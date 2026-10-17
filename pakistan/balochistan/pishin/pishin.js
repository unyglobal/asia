// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pishin","repository":"asia","path":"pakistan/balochistan/pishin","depth":3,"parent":"pakistan/balochistan","children":["thana"]});
export const childModules = Object.freeze({"thana":"./thana/thana.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
