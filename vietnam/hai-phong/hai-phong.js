// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hai-phong","repository":"asia","path":"vietnam/hai-phong","depth":2,"parent":"vietnam","children":["cat-ba","chi-linh","hai-duong","haiphong","o-son"]});
export const childModules = Object.freeze({"cat-ba":"./cat-ba/cat-ba.js","chi-linh":"./chi-linh/chi-linh.js","hai-duong":"./hai-duong/hai-duong.js","haiphong":"./haiphong/haiphong.js","o-son":"./o-son/o-son.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
