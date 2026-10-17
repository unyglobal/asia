// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"khuzdar","repository":"asia","path":"pakistan/balochistan/khuzdar","depth":3,"parent":"pakistan/balochistan","children":["gazai"]});
export const childModules = Object.freeze({"gazai":"./gazai/gazai.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
