// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"armavir","repository":"asia","path":"armenia/armavir","depth":2,"parent":"armenia","children":["vagharshapat"]});
export const childModules = Object.freeze({"vagharshapat":"./vagharshapat/vagharshapat.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
