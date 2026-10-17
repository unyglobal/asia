// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"wasit","repository":"asia","path":"iraq/wasit","depth":2,"parent":"iraq","children":["al-aziziyah","al-hayy","al-kut","an-nu-maniyah","as-suwayrah"]});
export const childModules = Object.freeze({"al-aziziyah":"./al-aziziyah/al-aziziyah.js","al-hayy":"./al-hayy/al-hayy.js","al-kut":"./al-kut/al-kut.js","an-nu-maniyah":"./an-nu-maniyah/an-nu-maniyah.js","as-suwayrah":"./as-suwayrah/as-suwayrah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
