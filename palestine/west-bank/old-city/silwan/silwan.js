// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"silwan","repository":"asia","path":"palestine/west-bank/old-city/silwan","depth":4,"parent":"palestine/west-bank/old-city","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
