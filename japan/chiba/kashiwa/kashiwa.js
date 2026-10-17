// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kashiwa","repository":"asia","path":"japan/chiba/kashiwa","depth":3,"parent":"japan/chiba","children":["akebono","chuo"]});
export const childModules = Object.freeze({"akebono":"./akebono/akebono.js","chuo":"./chuo/chuo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
