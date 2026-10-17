// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"khasab","repository":"asia","path":"oman/musandam-governorate/khasab","depth":3,"parent":"oman/musandam-governorate","children":["an-nahdah"]});
export const childModules = Object.freeze({"an-nahdah":"./an-nahdah/an-nahdah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
