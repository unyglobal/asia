// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tyre","repository":"asia","path":"lebanon/south-governorate/tyre","depth":3,"parent":"lebanon/south-governorate","children":["fanar"]});
export const childModules = Object.freeze({"fanar":"./fanar/fanar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
