// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"marand","repository":"asia","path":"iran/east-azerbaijan/marand","depth":3,"parent":"iran/east-azerbaijan","children":["kuy-e-tarbiyat","mahalleh-ye-minakhvor"]});
export const childModules = Object.freeze({"kuy-e-tarbiyat":"./kuy-e-tarbiyat/kuy-e-tarbiyat.js","mahalleh-ye-minakhvor":"./mahalleh-ye-minakhvor/mahalleh-ye-minakhvor.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
