// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"trung-phung","repository":"asia","path":"vietnam/hanoi/trung-phung","depth":3,"parent":"vietnam/hanoi","children":["van-ho"]});
export const childModules = Object.freeze({"van-ho":"./van-ho/van-ho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
