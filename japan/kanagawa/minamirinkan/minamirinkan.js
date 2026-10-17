// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"minamirinkan","repository":"asia","path":"japan/kanagawa/minamirinkan","depth":3,"parent":"japan/kanagawa","children":["rinkan"]});
export const childModules = Object.freeze({"rinkan":"./rinkan/rinkan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
