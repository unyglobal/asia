// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bobonaro","repository":"asia","path":"timor-leste/bobonaro","depth":2,"parent":"timor-leste","children":["maliana"]});
export const childModules = Object.freeze({"maliana":"./maliana/maliana.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
