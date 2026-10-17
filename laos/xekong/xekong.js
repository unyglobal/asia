// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"xekong","repository":"asia","path":"laos/xekong","depth":2,"parent":"laos","children":["sekong"]});
export const childModules = Object.freeze({"sekong":"./sekong/sekong.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
