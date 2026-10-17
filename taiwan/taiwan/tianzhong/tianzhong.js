// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tianzhong","repository":"asia","path":"taiwan/taiwan/tianzhong","depth":3,"parent":"taiwan/taiwan","children":["beitianzhong","daxinzhuang","jiujie","liujia"]});
export const childModules = Object.freeze({"beitianzhong":"./beitianzhong/beitianzhong.js","daxinzhuang":"./daxinzhuang/daxinzhuang.js","jiujie":"./jiujie/jiujie.js","liujia":"./liujia/liujia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
