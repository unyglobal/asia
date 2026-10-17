// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"basatin-ash-shaghur","repository":"asia","path":"syria/damascus-governorate/al-yarmuk/basatin-ash-shaghur","depth":4,"parent":"syria/damascus-governorate/al-yarmuk","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
