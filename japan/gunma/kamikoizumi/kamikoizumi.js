// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kamikoizumi","repository":"asia","path":"japan/gunma/kamikoizumi","depth":3,"parent":"japan/gunma","children":["higashikoizumi"]});
export const childModules = Object.freeze({"higashikoizumi":"./higashikoizumi/higashikoizumi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
