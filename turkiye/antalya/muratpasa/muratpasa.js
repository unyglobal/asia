// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"muratpasa","repository":"asia","path":"turkiye/antalya/muratpasa","depth":3,"parent":"turkiye/antalya","children":["yesilova"]});
export const childModules = Object.freeze({"yesilova":"./yesilova/yesilova.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
