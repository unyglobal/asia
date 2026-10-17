// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sialkot","repository":"asia","path":"pakistan/punjab/sialkot","depth":3,"parent":"pakistan/punjab","children":["hajipura"]});
export const childModules = Object.freeze({"hajipura":"./hajipura/hajipura.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
