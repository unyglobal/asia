// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"taloqan","repository":"asia","path":"afghanistan/takhar/taloqan","depth":3,"parent":"afghanistan/takhar","children":["majir"]});
export const childModules = Object.freeze({"majir":"./majir/majir.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
