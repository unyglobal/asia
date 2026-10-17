// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"higashine","repository":"asia","path":"japan/yamagata/higashine","depth":3,"parent":"japan/yamagata","children":["chuo","mikkamachi"]});
export const childModules = Object.freeze({"chuo":"./chuo/chuo.js","mikkamachi":"./mikkamachi/mikkamachi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
