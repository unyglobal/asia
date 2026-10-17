// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"batman","repository":"asia","path":"turkiye/batman","depth":2,"parent":"turkiye","children":["kozluk"]});
export const childModules = Object.freeze({"kozluk":"./kozluk/kozluk.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
