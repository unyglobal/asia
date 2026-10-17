// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rayong","repository":"asia","path":"thailand/rayong","depth":2,"parent":"thailand","children":["ban-chang","ban-phe","klaeng"]});
export const childModules = Object.freeze({"ban-chang":"./ban-chang/ban-chang.js","ban-phe":"./ban-phe/ban-phe.js","klaeng":"./klaeng/klaeng.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
