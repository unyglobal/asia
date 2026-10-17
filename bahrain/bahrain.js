// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bahrain","repository":"asia","path":"bahrain","depth":1,"parent":"","children":["manama","muharraq","northern","southern-governorate"]});
export const childModules = Object.freeze({"manama":"./manama/manama.js","muharraq":"./muharraq/muharraq.js","northern":"./northern/northern.js","southern-governorate":"./southern-governorate/southern-governorate.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
