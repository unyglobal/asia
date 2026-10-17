// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sangareddi","repository":"asia","path":"india/telangana/sangareddi","depth":3,"parent":"india/telangana","children":["nalsabgadda"]});
export const childModules = Object.freeze({"nalsabgadda":"./nalsabgadda/nalsabgadda.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
