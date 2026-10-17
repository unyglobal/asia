// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"paoy-paet","repository":"asia","path":"cambodia/banteay-meanchey/paoy-paet","depth":3,"parent":"cambodia/banteay-meanchey","children":["baliley"]});
export const childModules = Object.freeze({"baliley":"./baliley/baliley.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
