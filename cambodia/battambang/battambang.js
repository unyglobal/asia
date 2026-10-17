// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"battambang","repository":"asia","path":"cambodia/battambang","depth":2,"parent":"cambodia","children":["phum-anlung-vil"]});
export const childModules = Object.freeze({"phum-anlung-vil":"./phum-anlung-vil/phum-anlung-vil.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
