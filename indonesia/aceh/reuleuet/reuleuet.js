// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"reuleuet","repository":"asia","path":"indonesia/aceh/reuleuet","depth":3,"parent":"indonesia/aceh","children":["ulim-tunong"]});
export const childModules = Object.freeze({"ulim-tunong":"./ulim-tunong/ulim-tunong.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
