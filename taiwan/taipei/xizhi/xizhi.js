// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"xizhi","repository":"asia","path":"taiwan/taipei/xizhi","depth":3,"parent":"taiwan/taipei","children":["jiehou"]});
export const childModules = Object.freeze({"jiehou":"./jiehou/jiehou.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
