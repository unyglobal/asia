// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"si-sa-ket","repository":"asia","path":"thailand/si-sa-ket","depth":2,"parent":"thailand","children":["kantharalak"]});
export const childModules = Object.freeze({"kantharalak":"./kantharalak/kantharalak.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
