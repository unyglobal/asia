// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kaohsiung","repository":"asia","path":"taiwan/takao/kaohsiung","depth":3,"parent":"taiwan/takao","children":["lindefu","wentianzi"]});
export const childModules = Object.freeze({"lindefu":"./lindefu/lindefu.js","wentianzi":"./wentianzi/wentianzi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
