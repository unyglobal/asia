// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dammam","repository":"asia","path":"saudi-arabia/eastern-province/dammam","depth":3,"parent":"saudi-arabia/eastern-province","children":["al-adamah","al-badiyah"]});
export const childModules = Object.freeze({"al-adamah":"./al-adamah/al-adamah.js","al-badiyah":"./al-badiyah/al-badiyah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
