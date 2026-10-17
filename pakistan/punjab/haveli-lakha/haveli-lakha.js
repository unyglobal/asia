// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"haveli-lakha","repository":"asia","path":"pakistan/punjab/haveli-lakha","depth":3,"parent":"pakistan/punjab","children":["haveli-wasawewala"]});
export const childModules = Object.freeze({"haveli-wasawewala":"./haveli-wasawewala/haveli-wasawewala.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
