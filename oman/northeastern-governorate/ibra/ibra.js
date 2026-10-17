// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ibra","repository":"asia","path":"oman/northeastern-governorate/ibra","depth":3,"parent":"oman/northeastern-governorate","children":["an-najadi","as-sibakh"]});
export const childModules = Object.freeze({"an-najadi":"./an-najadi/an-najadi.js","as-sibakh":"./as-sibakh/as-sibakh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
