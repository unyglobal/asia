// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"taiwan","repository":"asia","path":"taiwan","depth":1,"parent":"","children":["fukien","taipei","taiwan","takao"]});
export const childModules = Object.freeze({"fukien":"./fukien/fukien.js","taipei":"./taipei/taipei.js","taiwan":"./taiwan/taiwan.js","takao":"./takao/takao.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
