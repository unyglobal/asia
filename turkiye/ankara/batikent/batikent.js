// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"batikent","repository":"asia","path":"turkiye/ankara/batikent","depth":3,"parent":"turkiye/ankara","children":["ilk-yerlesim","kent-koop"]});
export const childModules = Object.freeze({"ilk-yerlesim":"./ilk-yerlesim/ilk-yerlesim.js","kent-koop":"./kent-koop/kent-koop.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
