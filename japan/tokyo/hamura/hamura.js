// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hamura","repository":"asia","path":"japan/tokyo/hamura","depth":3,"parent":"japan/tokyo","children":["hanehigashi","kawasaki"]});
export const childModules = Object.freeze({"hanehigashi":"./hanehigashi/hanehigashi.js","kawasaki":"./kawasaki/kawasaki.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
