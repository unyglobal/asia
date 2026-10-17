// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"shetou","repository":"asia","path":"taiwan/taiwan/shetou","depth":3,"parent":"taiwan/taiwan","children":["jiushe","yuliao"]});
export const childModules = Object.freeze({"jiushe":"./jiushe/jiushe.js","yuliao":"./yuliao/yuliao.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
