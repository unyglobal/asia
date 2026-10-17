// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"baghdad","repository":"asia","path":"iraq/baghdad","depth":2,"parent":"iraq","children":["abu-ghurayb","al-mahmudiyah","sadr-city"]});
export const childModules = Object.freeze({"abu-ghurayb":"./abu-ghurayb/abu-ghurayb.js","al-mahmudiyah":"./al-mahmudiyah/al-mahmudiyah.js","sadr-city":"./sadr-city/sadr-city.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
