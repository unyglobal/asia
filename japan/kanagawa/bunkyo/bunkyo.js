// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bunkyo","repository":"asia","path":"japan/kanagawa/bunkyo","depth":3,"parent":"japan/kanagawa","children":["higashionuma","misono","wakamatsu"]});
export const childModules = Object.freeze({"higashionuma":"./higashionuma/higashionuma.js","misono":"./misono/misono.js","wakamatsu":"./wakamatsu/wakamatsu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
