// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jakarta","repository":"asia","path":"indonesia/jakarta","depth":2,"parent":"indonesia","children":["utan"]});
export const childModules = Object.freeze({"utan":"./utan/utan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
