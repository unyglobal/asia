// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lachi","repository":"asia","path":"pakistan/khyber-pakhtunkhwa/lachi","depth":3,"parent":"pakistan/khyber-pakhtunkhwa","children":["kaka-khel-colony"]});
export const childModules = Object.freeze({"kaka-khel-colony":"./kaka-khel-colony/kaka-khel-colony.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
