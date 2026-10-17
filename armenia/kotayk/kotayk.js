// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kotayk","repository":"asia","path":"armenia/kotayk","depth":2,"parent":"armenia","children":["abovyan","charentsavan","hrazdan"]});
export const childModules = Object.freeze({"abovyan":"./abovyan/abovyan.js","charentsavan":"./charentsavan/charentsavan.js","hrazdan":"./hrazdan/hrazdan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
