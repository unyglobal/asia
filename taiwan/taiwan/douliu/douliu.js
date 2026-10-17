// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"douliu","repository":"asia","path":"taiwan/taiwan/douliu","depth":3,"parent":"taiwan/taiwan","children":["xizhuangwei"]});
export const childModules = Object.freeze({"xizhuangwei":"./xizhuangwei/xizhuangwei.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
