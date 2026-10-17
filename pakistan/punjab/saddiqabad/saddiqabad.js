// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"saddiqabad","repository":"asia","path":"pakistan/punjab/saddiqabad","depth":3,"parent":"pakistan/punjab","children":["alyas-colony","arain-colony","lughari-colony"]});
export const childModules = Object.freeze({"alyas-colony":"./alyas-colony/alyas-colony.js","arain-colony":"./arain-colony/arain-colony.js","lughari-colony":"./lughari-colony/lughari-colony.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
