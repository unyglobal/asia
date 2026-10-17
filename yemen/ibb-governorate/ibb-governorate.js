// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ibb-governorate","repository":"asia","path":"yemen/ibb-governorate","depth":2,"parent":"yemen","children":["dhi-as-sufal","ibb","yarim"]});
export const childModules = Object.freeze({"dhi-as-sufal":"./dhi-as-sufal/dhi-as-sufal.js","ibb":"./ibb/ibb.js","yarim":"./yarim/yarim.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
