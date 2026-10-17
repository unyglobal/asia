// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sultanciftligi-koyu","repository":"asia","path":"turkiye/istanbul/sultangazi/sultanciftligi-koyu","depth":4,"parent":"turkiye/istanbul/sultangazi","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
