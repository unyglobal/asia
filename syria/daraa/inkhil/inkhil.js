// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"inkhil","repository":"asia","path":"syria/daraa/inkhil","depth":3,"parent":"syria/daraa","children":["abu-al-qur","al-bawati"]});
export const childModules = Object.freeze({"abu-al-qur":"./abu-al-qur/abu-al-qur.js","al-bawati":"./al-bawati/al-bawati.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
