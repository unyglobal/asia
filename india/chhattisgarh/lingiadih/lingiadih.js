// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lingiadih","repository":"asia","path":"india/chhattisgarh/lingiadih","depth":3,"parent":"india/chhattisgarh","children":["juna-bilaspur"]});
export const childModules = Object.freeze({"juna-bilaspur":"./juna-bilaspur/juna-bilaspur.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
