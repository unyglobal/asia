// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yoshida-kasugacho","repository":"asia","path":"japan/niigata/yoshida-kasugacho","depth":3,"parent":"japan/niigata","children":["yoshidaasahicho"]});
export const childModules = Object.freeze({"yoshidaasahicho":"./yoshidaasahicho/yoshidaasahicho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
