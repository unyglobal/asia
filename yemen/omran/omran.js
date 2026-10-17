// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"omran","repository":"asia","path":"yemen/omran","depth":2,"parent":"yemen","children":["amran"]});
export const childModules = Object.freeze({"amran":"./amran/amran.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
