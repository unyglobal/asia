// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"takehara","repository":"asia","path":"japan/hiroshima/takehara","depth":3,"parent":"japan/hiroshima","children":["chuo","hommachi","minatomachi","tanora"]});
export const childModules = Object.freeze({"chuo":"./chuo/chuo.js","hommachi":"./hommachi/hommachi.js","minatomachi":"./minatomachi/minatomachi.js","tanora":"./tanora/tanora.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
