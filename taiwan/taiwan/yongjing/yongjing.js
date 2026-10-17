// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yongjing","repository":"asia","path":"taiwan/taiwan/yongjing","depth":3,"parent":"taiwan/taiwan","children":["guanditing"]});
export const childModules = Object.freeze({"guanditing":"./guanditing/guanditing.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
