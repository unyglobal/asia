// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kazo","repository":"asia","path":"japan/saitama/kazo","depth":3,"parent":"japan/saitama","children":["chuo","toei"]});
export const childModules = Object.freeze({"chuo":"./chuo/chuo.js","toei":"./toei/toei.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
