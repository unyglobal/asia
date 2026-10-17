// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fukayacho","repository":"asia","path":"japan/saitama/fukayacho","depth":3,"parent":"japan/saitama","children":["inaricho"]});
export const childModules = Object.freeze({"inaricho":"./inaricho/inaricho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
