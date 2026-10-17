// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-kut","repository":"asia","path":"iraq/wasit/al-kut","depth":3,"parent":"iraq/wasit","children":["al-khachiyah"]});
export const childModules = Object.freeze({"al-khachiyah":"./al-khachiyah/al-khachiyah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
