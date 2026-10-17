// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fukien","repository":"asia","path":"taiwan/fukien","depth":2,"parent":"taiwan","children":["jincheng","jinhu"]});
export const childModules = Object.freeze({"jincheng":"./jincheng/jincheng.js","jinhu":"./jinhu/jinhu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
