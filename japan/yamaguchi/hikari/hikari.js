// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hikari","repository":"asia","path":"japan/yamaguchi/hikari","depth":3,"parent":"japan/yamaguchi","children":["chuo","mitsui"]});
export const childModules = Object.freeze({"chuo":"./chuo/chuo.js","mitsui":"./mitsui/mitsui.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
