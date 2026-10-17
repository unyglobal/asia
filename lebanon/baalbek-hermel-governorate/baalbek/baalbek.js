// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"baalbek","repository":"asia","path":"lebanon/baalbek-hermel-governorate/baalbek","depth":3,"parent":"lebanon/baalbek-hermel-governorate","children":["el-maqassed","satha"]});
export const childModules = Object.freeze({"el-maqassed":"./el-maqassed/el-maqassed.js","satha":"./satha/satha.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
