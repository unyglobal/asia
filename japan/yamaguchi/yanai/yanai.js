// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yanai","repository":"asia","path":"japan/yamaguchi/yanai","depth":3,"parent":"japan/yamaguchi","children":["chuo","minamihama"]});
export const childModules = Object.freeze({"chuo":"./chuo/chuo.js","minamihama":"./minamihama/minamihama.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
