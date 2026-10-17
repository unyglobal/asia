// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"old-city","repository":"asia","path":"palestine/west-bank/old-city","depth":3,"parent":"palestine/west-bank","children":["silwan"]});
export const childModules = Object.freeze({"silwan":"./silwan/silwan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
