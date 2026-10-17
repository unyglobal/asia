// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"larkana","repository":"asia","path":"pakistan/sindh/larkana","depth":3,"parent":"pakistan/sindh","children":["mujahid-colony","peoples-colony","rasulabad"]});
export const childModules = Object.freeze({"mujahid-colony":"./mujahid-colony/mujahid-colony.js","peoples-colony":"./peoples-colony/peoples-colony.js","rasulabad":"./rasulabad/rasulabad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
