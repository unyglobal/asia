// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bawwabat-as-salihiyah","repository":"asia","path":"syria/damascus-governorate/damascus/bawwabat-as-salihiyah","depth":4,"parent":"syria/damascus-governorate/damascus","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
