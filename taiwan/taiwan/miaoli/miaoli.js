// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"miaoli","repository":"asia","path":"taiwan/taiwan/miaoli","depth":3,"parent":"taiwan/taiwan","children":["sheliaogang","zhongmiao"]});
export const childModules = Object.freeze({"sheliaogang":"./sheliaogang/sheliaogang.js","zhongmiao":"./zhongmiao/zhongmiao.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
