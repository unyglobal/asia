// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"shirak","repository":"asia","path":"armenia/shirak","depth":2,"parent":"armenia","children":["artik","gyumri"]});
export const childModules = Object.freeze({"artik":"./artik/artik.js","gyumri":"./gyumri/gyumri.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
