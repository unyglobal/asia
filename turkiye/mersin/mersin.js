// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mersin","repository":"asia","path":"turkiye/mersin","depth":2,"parent":"turkiye","children":["anamur","bozyaz","erdemli","mut","silifke","tarsus","tasucu"]});
export const childModules = Object.freeze({"anamur":"./anamur/anamur.js","bozyaz":"./bozyaz/bozyaz.js","erdemli":"./erdemli/erdemli.js","mut":"./mut/mut.js","silifke":"./silifke/silifke.js","tarsus":"./tarsus/tarsus.js","tasucu":"./tasucu/tasucu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
