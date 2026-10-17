// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"damascus-governorate","repository":"asia","path":"syria/damascus-governorate","depth":2,"parent":"syria","children":["al-yarmuk","damascus"]});
export const childModules = Object.freeze({"al-yarmuk":"./al-yarmuk/al-yarmuk.js","damascus":"./damascus/damascus.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
