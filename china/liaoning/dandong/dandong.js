// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dandong","repository":"asia","path":"china/liaoning/dandong","depth":3,"parent":"china/liaoning","children":["yuanbao"]});
export const childModules = Object.freeze({"yuanbao":"./yuanbao/yuanbao.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
