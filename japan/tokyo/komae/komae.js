// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"komae","repository":"asia","path":"japan/tokyo/komae","depth":3,"parent":"japan/tokyo","children":["higashiizumi"]});
export const childModules = Object.freeze({"higashiizumi":"./higashiizumi/higashiizumi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
