// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pateros","repository":"asia","path":"philippines/national-capital-region/pateros","depth":3,"parent":"philippines/national-capital-region","children":["masikap-complex","telan-subdivision"]});
export const childModules = Object.freeze({"masikap-complex":"./masikap-complex/masikap-complex.js","telan-subdivision":"./telan-subdivision/telan-subdivision.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
