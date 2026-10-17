// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sultangazi","repository":"asia","path":"turkiye/istanbul/sultangazi","depth":3,"parent":"turkiye/istanbul","children":["sultanciftligi-koyu"]});
export const childModules = Object.freeze({"sultanciftligi-koyu":"./sultanciftligi-koyu/sultanciftligi-koyu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
