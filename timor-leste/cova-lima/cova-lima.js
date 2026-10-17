// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cova-lima","repository":"asia","path":"timor-leste/cova-lima","depth":2,"parent":"timor-leste","children":["suai"]});
export const childModules = Object.freeze({"suai":"./suai/suai.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
