// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"onoda","repository":"asia","path":"japan/yamaguchi/onoda","depth":3,"parent":"japan/yamaguchi","children":["asahimachi","hinode","shinsei"]});
export const childModules = Object.freeze({"asahimachi":"./asahimachi/asahimachi.js","hinode":"./hinode/hinode.js","shinsei":"./shinsei/shinsei.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
