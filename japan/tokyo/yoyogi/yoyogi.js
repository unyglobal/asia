// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yoyogi","repository":"asia","path":"japan/tokyo/yoyogi","depth":3,"parent":"japan/tokyo","children":["yoyogikamizonocho"]});
export const childModules = Object.freeze({"yoyogikamizonocho":"./yoyogikamizonocho/yoyogikamizonocho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
