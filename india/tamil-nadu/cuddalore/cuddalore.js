// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cuddalore","repository":"asia","path":"india/tamil-nadu/cuddalore","depth":3,"parent":"india/tamil-nadu","children":["anaikkuppam"]});
export const childModules = Object.freeze({"anaikkuppam":"./anaikkuppam/anaikkuppam.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
