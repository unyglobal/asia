// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yuanlin","repository":"asia","path":"taiwan/taiwan/yuanlin","depth":3,"parent":"taiwan/taiwan","children":["huangcuo","songzijiao"]});
export const childModules = Object.freeze({"huangcuo":"./huangcuo/huangcuo.js","songzijiao":"./songzijiao/songzijiao.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
