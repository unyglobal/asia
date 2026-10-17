// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mihara","repository":"asia","path":"japan/hiroshima/mihara","depth":3,"parent":"japan/hiroshima","children":["asahimachi","higashimachi","hommachi","kohama","minatomachi","nishimachi","shiromachi"]});
export const childModules = Object.freeze({"asahimachi":"./asahimachi/asahimachi.js","higashimachi":"./higashimachi/higashimachi.js","hommachi":"./hommachi/hommachi.js","kohama":"./kohama/kohama.js","minatomachi":"./minatomachi/minatomachi.js","nishimachi":"./nishimachi/nishimachi.js","shiromachi":"./shiromachi/shiromachi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
