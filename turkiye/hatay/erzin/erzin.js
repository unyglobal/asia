// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"erzin","repository":"asia","path":"turkiye/hatay/erzin","depth":3,"parent":"turkiye/hatay","children":["fakilar","mahmutlar"]});
export const childModules = Object.freeze({"fakilar":"./fakilar/fakilar.js","mahmutlar":"./mahmutlar/mahmutlar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
