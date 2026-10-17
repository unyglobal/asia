// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bet-shemesh","repository":"asia","path":"israel/jerusalem/bet-shemesh","depth":3,"parent":"israel/jerusalem","children":["ramat-bet-shemesh"]});
export const childModules = Object.freeze({"ramat-bet-shemesh":"./ramat-bet-shemesh/ramat-bet-shemesh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
