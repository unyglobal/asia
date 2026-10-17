// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zhudong","repository":"asia","path":"taiwan/taiwan/zhudong","depth":3,"parent":"taiwan/taiwan","children":["fengshuxia","shanggongguan"]});
export const childModules = Object.freeze({"fengshuxia":"./fengshuxia/fengshuxia.js","shanggongguan":"./shanggongguan/shanggongguan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
