// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"banten","repository":"asia","path":"indonesia/banten","depth":2,"parent":"indonesia","children":["cilegon","curug","labuan","pandeglang","rangkasbitung","serang","south-tangerang","tangerang"]});
export const childModules = Object.freeze({"cilegon":"./cilegon/cilegon.js","curug":"./curug/curug.js","labuan":"./labuan/labuan.js","pandeglang":"./pandeglang/pandeglang.js","rangkasbitung":"./rangkasbitung/rangkasbitung.js","serang":"./serang/serang.js","south-tangerang":"./south-tangerang/south-tangerang.js","tangerang":"./tangerang/tangerang.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
