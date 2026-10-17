// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zhubei","repository":"asia","path":"taiwan/taiwan/zhubei","depth":3,"parent":"taiwan/taiwan","children":["fanzipo","xinshe","zhubeikou"]});
export const childModules = Object.freeze({"fanzipo":"./fanzipo/fanzipo.js","xinshe":"./xinshe/xinshe.js","zhubeikou":"./zhubeikou/zhubeikou.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
