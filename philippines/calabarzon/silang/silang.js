// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"silang","repository":"asia","path":"philippines/calabarzon/silang","depth":3,"parent":"philippines/calabarzon","children":["gabriela-hills","ginga-subdivision","josephine-village"]});
export const childModules = Object.freeze({"gabriela-hills":"./gabriela-hills/gabriela-hills.js","ginga-subdivision":"./ginga-subdivision/ginga-subdivision.js","josephine-village":"./josephine-village/josephine-village.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
