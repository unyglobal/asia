// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tartar-district","repository":"asia","path":"azerbaijan/tartar-district","depth":2,"parent":"azerbaijan","children":["tartar"]});
export const childModules = Object.freeze({"tartar":"./tartar/tartar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
