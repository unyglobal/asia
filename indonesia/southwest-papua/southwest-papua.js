// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"southwest-papua","repository":"asia","path":"indonesia/southwest-papua","depth":2,"parent":"indonesia","children":["sorong","teminabuan","waisai"]});
export const childModules = Object.freeze({"sorong":"./sorong/sorong.js","teminabuan":"./teminabuan/teminabuan.js","waisai":"./waisai/waisai.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
