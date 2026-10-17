// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"janbaz-force","repository":"asia","path":"pakistan/punjab/model-town/janbaz-force","depth":4,"parent":"pakistan/punjab/model-town","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
