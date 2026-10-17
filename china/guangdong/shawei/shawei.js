// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"shawei","repository":"asia","path":"china/guangdong/shawei","depth":3,"parent":"china/guangdong","children":["dongchong"]});
export const childModules = Object.freeze({"dongchong":"./dongchong/dongchong.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
