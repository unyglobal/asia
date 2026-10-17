// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nakhon-si-thammarat","repository":"asia","path":"thailand/nakhon-si-thammarat","depth":2,"parent":"thailand","children":["pak-phanang","ron-phibun","thung-song"]});
export const childModules = Object.freeze({"pak-phanang":"./pak-phanang/pak-phanang.js","ron-phibun":"./ron-phibun/ron-phibun.js","thung-song":"./thung-song/thung-song.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
