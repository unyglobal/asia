// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"buriram","repository":"asia","path":"thailand/buriram","depth":2,"parent":"thailand","children":["buri-ram","nang-rong","prakhon-chai"]});
export const childModules = Object.freeze({"buri-ram":"./buri-ram/buri-ram.js","nang-rong":"./nang-rong/nang-rong.js","prakhon-chai":"./prakhon-chai/prakhon-chai.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
