// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"balkh","repository":"asia","path":"afghanistan/balkh","depth":2,"parent":"afghanistan","children":["khulm","mazar-e-sharif"]});
export const childModules = Object.freeze({"khulm":"./khulm/khulm.js","mazar-e-sharif":"./mazar-e-sharif/mazar-e-sharif.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
