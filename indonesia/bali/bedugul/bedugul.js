// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bedugul","repository":"asia","path":"indonesia/bali/bedugul","depth":3,"parent":"indonesia/bali","children":["banjar-kecicang-bali"]});
export const childModules = Object.freeze({"banjar-kecicang-bali":"./banjar-kecicang-bali/banjar-kecicang-bali.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
