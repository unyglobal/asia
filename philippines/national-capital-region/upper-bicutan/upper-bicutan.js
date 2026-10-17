// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"upper-bicutan","repository":"asia","path":"philippines/national-capital-region/upper-bicutan","depth":3,"parent":"philippines/national-capital-region","children":["united-paranaque-subdivision"]});
export const childModules = Object.freeze({"united-paranaque-subdivision":"./united-paranaque-subdivision/united-paranaque-subdivision.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
