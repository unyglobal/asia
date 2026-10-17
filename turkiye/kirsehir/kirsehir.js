// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kirsehir","repository":"asia","path":"turkiye/kirsehir","depth":2,"parent":"turkiye","children":["k-rsehir","kaman","mucur"]});
export const childModules = Object.freeze({"k-rsehir":"./k-rsehir/k-rsehir.js","kaman":"./kaman/kaman.js","mucur":"./mucur/mucur.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
