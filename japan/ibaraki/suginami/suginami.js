// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"suginami","repository":"asia","path":"japan/ibaraki/suginami","depth":3,"parent":"japan/ibaraki","children":["kitafuchu"]});
export const childModules = Object.freeze({"kitafuchu":"./kitafuchu/kitafuchu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
