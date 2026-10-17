// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jazan-region","repository":"asia","path":"saudi-arabia/jazan-region","depth":2,"parent":"saudi-arabia","children":["abu-arish","damad","fayfa","jizan","sabya","samitah"]});
export const childModules = Object.freeze({"abu-arish":"./abu-arish/abu-arish.js","damad":"./damad/damad.js","fayfa":"./fayfa/fayfa.js","jizan":"./jizan/jizan.js","sabya":"./sabya/sabya.js","samitah":"./samitah/samitah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
