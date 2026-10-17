// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"baalbek-hermel-governorate","repository":"asia","path":"lebanon/baalbek-hermel-governorate","depth":2,"parent":"lebanon","children":["aarsal","baalbek","chmistar","el-hermel"]});
export const childModules = Object.freeze({"aarsal":"./aarsal/aarsal.js","baalbek":"./baalbek/baalbek.js","chmistar":"./chmistar/chmistar.js","el-hermel":"./el-hermel/el-hermel.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
