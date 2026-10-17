// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"linnei","repository":"asia","path":"taiwan/taiwan/linnei","depth":3,"parent":"taiwan/taiwan","children":["dingzhuang","xinxing"]});
export const childModules = Object.freeze({"dingzhuang":"./dingzhuang/dingzhuang.js","xinxing":"./xinxing/xinxing.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
