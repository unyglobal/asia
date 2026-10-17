// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"shabwah","repository":"asia","path":"yemen/shabwah","depth":2,"parent":"yemen","children":["ataq"]});
export const childModules = Object.freeze({"ataq":"./ataq/ataq.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
