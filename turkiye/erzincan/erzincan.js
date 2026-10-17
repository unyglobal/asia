// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"erzincan","repository":"asia","path":"turkiye/erzincan","depth":2,"parent":"turkiye","children":["cimin"]});
export const childModules = Object.freeze({"cimin":"./cimin/cimin.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
