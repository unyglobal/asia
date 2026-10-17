// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"taichung","repository":"asia","path":"taiwan/taiwan/taichung","depth":3,"parent":"taiwan/taiwan","children":["dongshizi"]});
export const childModules = Object.freeze({"dongshizi":"./dongshizi/dongshizi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
