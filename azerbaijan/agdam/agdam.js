// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"agdam","repository":"asia","path":"azerbaijan/agdam","depth":2,"parent":"azerbaijan","children":["aghdam"]});
export const childModules = Object.freeze({"aghdam":"./aghdam/aghdam.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
