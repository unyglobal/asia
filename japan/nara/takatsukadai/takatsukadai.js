// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"takatsukadai","repository":"asia","path":"japan/nara/takatsukadai","depth":3,"parent":"japan/nara","children":["owada"]});
export const childModules = Object.freeze({"owada":"./owada/owada.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
