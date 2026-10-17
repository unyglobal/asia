// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chiayi-city","repository":"asia","path":"taiwan/taiwan/chiayi-city","depth":3,"parent":"taiwan/taiwan","children":["pizitou"]});
export const childModules = Object.freeze({"pizitou":"./pizitou/pizitou.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
