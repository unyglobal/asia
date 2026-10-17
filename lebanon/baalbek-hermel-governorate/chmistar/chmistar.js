// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chmistar","repository":"asia","path":"lebanon/baalbek-hermel-governorate/chmistar","depth":3,"parent":"lebanon/baalbek-hermel-governorate","children":["nabi-sami"]});
export const childModules = Object.freeze({"nabi-sami":"./nabi-sami/nabi-sami.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
