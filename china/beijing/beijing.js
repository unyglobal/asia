// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"beijing","repository":"asia","path":"china/beijing","depth":2,"parent":"china","children":["changping","fangshan","liangxiang","mentougou","shunyi","tongzhou"]});
export const childModules = Object.freeze({"changping":"./changping/changping.js","fangshan":"./fangshan/fangshan.js","liangxiang":"./liangxiang/liangxiang.js","mentougou":"./mentougou/mentougou.js","shunyi":"./shunyi/shunyi.js","tongzhou":"./tongzhou/tongzhou.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
