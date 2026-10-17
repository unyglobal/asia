// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"northeastern-governorate","repository":"asia","path":"oman/northeastern-governorate","depth":2,"parent":"oman","children":["badiyah","ibra"]});
export const childModules = Object.freeze({"badiyah":"./badiyah/badiyah.js","ibra":"./ibra/ibra.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
