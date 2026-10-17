// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"xihu","repository":"asia","path":"taiwan/taiwan/xihu","depth":3,"parent":"taiwan/taiwan","children":["biantou","dazhuwei","liucuo","sikuaicuo"]});
export const childModules = Object.freeze({"biantou":"./biantou/biantou.js","dazhuwei":"./dazhuwei/dazhuwei.js","liucuo":"./liucuo/liucuo.js","sikuaicuo":"./sikuaicuo/sikuaicuo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
