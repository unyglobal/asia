// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"takao","repository":"asia","path":"taiwan/takao","depth":2,"parent":"taiwan","children":["fengshan","kaohsiung"]});
export const childModules = Object.freeze({"fengshan":"./fengshan/fengshan.js","kaohsiung":"./kaohsiung/kaohsiung.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
