// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"taipei","repository":"asia","path":"taiwan/taipei","depth":2,"parent":"taiwan","children":["xizhi","yingge"]});
export const childModules = Object.freeze({"xizhi":"./xizhi/xizhi.js","yingge":"./yingge/yingge.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
