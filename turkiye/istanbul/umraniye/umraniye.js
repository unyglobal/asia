// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"umraniye","repository":"asia","path":"turkiye/istanbul/umraniye","depth":3,"parent":"turkiye/istanbul","children":["tepeustu"]});
export const childModules = Object.freeze({"tepeustu":"./tepeustu/tepeustu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
