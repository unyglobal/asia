// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zhambyl","repository":"asia","path":"kazakhstan/zhambyl","depth":2,"parent":"kazakhstan","children":["karatau","merke","sarykemer","shu","taraz","zhangatas"]});
export const childModules = Object.freeze({"karatau":"./karatau/karatau.js","merke":"./merke/merke.js","sarykemer":"./sarykemer/sarykemer.js","shu":"./shu/shu.js","taraz":"./taraz/taraz.js","zhangatas":"./zhangatas/zhangatas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
