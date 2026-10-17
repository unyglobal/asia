// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"brunei","repository":"asia","path":"brunei","depth":1,"parent":"","children":["belait","brunei-muara-district","tutong"]});
export const childModules = Object.freeze({"belait":"./belait/belait.js","brunei-muara-district":"./brunei-muara-district/brunei-muara-district.js","tutong":"./tutong/tutong.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
