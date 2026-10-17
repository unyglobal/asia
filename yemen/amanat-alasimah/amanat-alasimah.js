// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"amanat-alasimah","repository":"asia","path":"yemen/amanat-alasimah","depth":2,"parent":"yemen","children":["sanaa"]});
export const childModules = Object.freeze({"sanaa":"./sanaa/sanaa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
