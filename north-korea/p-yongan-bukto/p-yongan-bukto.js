// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"p-yongan-bukto","repository":"asia","path":"north-korea/p-yongan-bukto","depth":2,"parent":"north-korea","children":["chongju-si","kujang-up","kusong-si","sakchu-up","sinuiju","uiju"]});
export const childModules = Object.freeze({"chongju-si":"./chongju-si/chongju-si.js","kujang-up":"./kujang-up/kujang-up.js","kusong-si":"./kusong-si/kusong-si.js","sakchu-up":"./sakchu-up/sakchu-up.js","sinuiju":"./sinuiju/sinuiju.js","uiju":"./uiju/uiju.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
