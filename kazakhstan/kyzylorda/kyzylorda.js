// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kyzylorda","repository":"asia","path":"kazakhstan/kyzylorda","depth":2,"parent":"kazakhstan","children":["aral","novokazalinsk","shiyeli","tasbuget","zhangaqorghan","zhosaly"]});
export const childModules = Object.freeze({"aral":"./aral/aral.js","novokazalinsk":"./novokazalinsk/novokazalinsk.js","shiyeli":"./shiyeli/shiyeli.js","tasbuget":"./tasbuget/tasbuget.js","zhangaqorghan":"./zhangaqorghan/zhangaqorghan.js","zhosaly":"./zhosaly/zhosaly.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
