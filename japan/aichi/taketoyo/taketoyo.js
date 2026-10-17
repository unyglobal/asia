// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"taketoyo","repository":"asia","path":"japan/aichi/taketoyo","depth":3,"parent":"japan/aichi","children":["age"]});
export const childModules = Object.freeze({"age":"./age/age.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
