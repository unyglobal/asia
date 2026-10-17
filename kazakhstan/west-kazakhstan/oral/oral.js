// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"oral","repository":"asia","path":"kazakhstan/west-kazakhstan/oral","depth":3,"parent":"kazakhstan/west-kazakhstan","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
