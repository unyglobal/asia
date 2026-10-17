// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fengshan","repository":"asia","path":"taiwan/takao/fengshan","depth":3,"parent":"taiwan/takao","children":["wanzitou"]});
export const childModules = Object.freeze({"wanzitou":"./wanzitou/wanzitou.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
