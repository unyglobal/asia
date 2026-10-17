// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mahmutlar","repository":"asia","path":"turkiye/antalya/mahmutlar","depth":3,"parent":"turkiye/antalya","children":["yeni"]});
export const childModules = Object.freeze({"yeni":"./yeni/yeni.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
