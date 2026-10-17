// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"shangrao","repository":"asia","path":"china/jiangxi/shangrao","depth":3,"parent":"china/jiangxi","children":["tangjia"]});
export const childModules = Object.freeze({"tangjia":"./tangjia/tangjia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
