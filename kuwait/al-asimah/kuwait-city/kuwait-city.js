// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kuwait-city","repository":"asia","path":"kuwait/al-asimah/kuwait-city","depth":3,"parent":"kuwait/al-asimah","children":["al-murqab","as-salihiyah","safat"]});
export const childModules = Object.freeze({"al-murqab":"./al-murqab/al-murqab.js","as-salihiyah":"./as-salihiyah/as-salihiyah.js","safat":"./safat/safat.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
