// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"aragatsotn","repository":"asia","path":"armenia/aragatsotn","depth":2,"parent":"armenia","children":["ashtarak"]});
export const childModules = Object.freeze({"ashtarak":"./ashtarak/ashtarak.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
